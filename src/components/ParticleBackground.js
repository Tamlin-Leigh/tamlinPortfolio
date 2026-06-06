import { useEffect, useRef } from 'react';

const C    = '79, 123, 235'; // #4f7beb
const GLOW = '#4f7beb';
const CONNECT_DIST = 190;
const MOUSE_DIST   = 140;

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let animId;
    const mouse = { x: -9999, y: -9999 };
    let particles = [];

    const build = () => {
      const count     = Math.min(110, Math.floor((canvas.width * canvas.height) / 9500));
      const nodeCount = Math.floor(count * 0.18);

      particles = Array.from({ length: count }, (_, i) => {
        const isNode = i < nodeCount;
        return {
          x:     Math.random() * canvas.width,
          y:     Math.random() * canvas.height,
          vx:    (Math.random() - 0.5) * 0.3,
          vy:    (Math.random() - 0.5) * 0.3,
          px:    Math.random() * Math.PI * 2,
          py:    Math.random() * Math.PI * 2,
          r:     isNode ? Math.random() * 2 + 2.5 : Math.random() * 1.2 + 0.4,
          alpha: isNode ? Math.random() * 0.4 + 0.55 : Math.random() * 0.3 + 0.12,
          glow:  isNode ? 18 : 5,
          node:  isNode,
        };
      });
    };

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      build();
    };
    resize();

    const onResize    = () => resize();
    const onMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseOut  = () => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener('resize',     onResize);
    window.addEventListener('mousemove',  onMouseMove);
    window.addEventListener('mouseleave', onMouseOut);

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.004;

      for (const p of particles) {
        p.x += p.vx + Math.sin(t + p.px) * 0.18;
        p.y += p.vy + Math.cos(t + p.py) * 0.18;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md  = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < MOUSE_DIST && md > 0) {
          const f = (MOUSE_DIST - md) / MOUSE_DIST;
          p.x += (mdx / md) * f * 2.2;
          p.y += (mdy / md) * f * 2.2;
        }

        if (p.x < 0)             p.x += canvas.width;
        if (p.x > canvas.width)  p.x -= canvas.width;
        if (p.y < 0)             p.y += canvas.height;
        if (p.y > canvas.height) p.y -= canvas.height;
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d >= CONNECT_DIST) continue;

          const strength = 1 - d / CONNECT_DIST;
          const isBold   = particles[i].node || particles[j].node;
          const opacity  = isBold ? strength * 0.35 : strength * 0.14;

          const g = ctx.createLinearGradient(
            particles[i].x, particles[i].y,
            particles[j].x, particles[j].y
          );
          g.addColorStop(0, `rgba(${C}, ${opacity})`);
          g.addColorStop(1, `rgba(${C}, ${opacity * 0.4})`);

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = g;
          ctx.lineWidth   = isBold ? 0.9 : 0.4;
          ctx.stroke();
        }
      }

      // small dots
      for (const p of particles) {
        if (p.node) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${C}, ${p.alpha})`;
        ctx.fill();
      }

      // glowing nodes
      for (const p of particles) {
        if (!p.node) continue;
        ctx.save();
        ctx.shadowBlur  = p.glow;
        ctx.shadowColor = GLOW;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${C}, ${p.alpha})`;
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize',     onResize);
      window.removeEventListener('mousemove',  onMouseMove);
      window.removeEventListener('mouseleave', onMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
