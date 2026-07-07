"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

const VERTEX_SHADER = `
uniform float uTime; uniform vec2 uCursor; uniform float uAmp; uniform float uSize; uniform float uPixelH; uniform float uDpr;
varying float vAct;
void main(){
  vec3 pos=position;
  vec2 d=pos.xy-uCursor; float dist=length(d);
  float ripple=sin(dist*0.85 - uTime*2.1)*exp(-dist*0.32);
  float bump=exp(-dist*dist*0.02);
  float amb=(sin(pos.x*0.16+uTime*0.6)+cos(pos.y*0.14-uTime*0.5))*0.32;
  float disp=amb + (ripple*0.9 + bump*1.5)*uAmp;
  pos.z+=disp;
  vAct=clamp(bump*1.3 + max(ripple,0.0)*uAmp, 0.0, 1.0);
  vec4 mv=modelViewMatrix*vec4(pos,1.0);
  gl_Position=projectionMatrix*mv;
  gl_PointSize=clamp((uSize+vAct*uSize*2.4)*(uPixelH/max(-mv.z,0.001))*0.020,1.2,18.0)*uDpr;
}
`

const FRAGMENT_SHADER = `
precision mediump float;
varying float vAct; uniform vec3 uGrey; uniform vec3 uGreen;
void main(){
  vec2 uv=gl_PointCoord-0.5;
  float c=smoothstep(0.5,0.14,length(uv));
  if(c<=0.003) discard;
  vec3 col=mix(uGrey,uGreen,vAct);
  gl_FragColor=vec4(col, c*(0.16 + vAct*0.82));
}
`

export default function SonarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const mobile = window.matchMedia("(max-width: 680px)").matches

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    } catch {
      return
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    renderer.setPixelRatio(dpr)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200)
    camera.position.set(0, 0, 34)

    // Denser field on desktop, lighter on mobile to protect frame rate.
    const SP = mobile ? 0.85 : 0.46
    const HX = mobile ? 20 : 32
    const HY = mobile ? 16 : 21
    const verts: number[] = []
    for (let y = -HY; y <= HY; y += SP) {
      for (let x = -HX; x <= HX; x += SP) {
        verts.push(x, y, 0)
      }
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3))

    const uni = {
      uTime: { value: 0 },
      uCursor: { value: new THREE.Vector2(0, 0) },
      uAmp: { value: 1.0 },
      uSize: { value: 4.0 },
      uPixelH: { value: container.clientHeight || window.innerHeight },
      uDpr: { value: dpr },
      uGrey: { value: new THREE.Color(0x9a9ea3) },
      uGreen: { value: new THREE.Color(0x35b077) },
    }
    const mat = new THREE.ShaderMaterial({
      uniforms: uni,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.NormalBlending,
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
    })
    const points = new THREE.Points(geo, mat)
    scene.add(points)

    let visH = 1
    let visW = 1
    let rafId = 0
    let running = false
    let visible = true
    const t0 = performance.now()

    function computeVis() {
      visH = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z
      visW = visH * camera.aspect
    }
    function resize() {
      const w = container!.clientWidth
      const h = container!.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
      uni.uPixelH.value = h
      computeVis()
      // Re-render immediately so a resize while the rAF loop is paused
      // (reduced-motion, or off-screen) doesn't leave a stale/stretched frame.
      if (!running) renderer.render(scene, camera)
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    let nx = 0, ny = 0, tx = 0, ty = 0, pulse = 0
    function handleMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect()
      tx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      ty = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    }
    function handleMouseDown() {
      pulse = 1.0
    }
    // Listen on window (not the canvas container) since foreground hero
    // content sits above the canvas and would otherwise block pointer events.
    if (fine) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mousedown", handleMouseDown)
    }

    function frame(now: number) {
      if (!running) return
      const t = (now - t0) / 1000
      if (!fine) {
        tx = Math.cos(t * 0.42) * 0.55
        ty = Math.sin(t * 0.61) * 0.45
      }
      nx += (tx - nx) * 0.06
      ny += (ty - ny) * 0.06
      uni.uCursor.value.set(nx * visW * 0.5, ny * visH * 0.5)
      pulse *= 0.94
      uni.uAmp.value = 1.0 + pulse * 1.6
      uni.uTime.value = t
      points.rotation.x += (ny * 0.14 - points.rotation.x) * 0.05
      points.rotation.y += (nx * 0.16 - points.rotation.y) * 0.05
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(frame)
    }

    function start() {
      if (running || reduce) return
      running = true
      rafId = requestAnimationFrame(frame)
    }
    function stop() {
      running = false
      if (rafId) cancelAnimationFrame(rafId)
    }

    let cleanupVisibility: (() => void) | null = null
    if (reduce) {
      uni.uAmp.value = 0.35
      renderer.render(scene, camera)
    } else {
      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting
          if (visible && !document.hidden) start()
          else stop()
        },
        { threshold: 0.05 },
      )
      io.observe(container)

      const handleVisibility = () => {
        if (document.hidden) stop()
        else if (visible) start()
      }
      document.addEventListener("visibilitychange", handleVisibility)

      cleanupVisibility = () => {
        io.disconnect()
        document.removeEventListener("visibilitychange", handleVisibility)
      }
    }

    return () => {
      stop()
      resizeObserver.disconnect()
      if (fine) {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mousedown", handleMouseDown)
      }
      cleanupVisibility?.()
      geo.dispose()
      mat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
