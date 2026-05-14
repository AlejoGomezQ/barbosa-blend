import { Reveal } from "./Reveal";

import bagsAll from "@/assets/bags-all.jpg";

const steps = [
  { n: "01", t: "Recepción", d: "Recibimos tu café pergamino o verde en nuestra planta." },
  { n: "02", t: "Tostión", d: "Perfilamos la tostión a la medida de tu lote y tu marca." },
  { n: "03", t: "Empaque", d: "Entregamos en grano o molido, listo para tu canal de venta." },
];

export function Maquila() {
  return (
    <section id="maquila" className="relative overflow-hidden bg-coffee py-28 text-coffee-foreground md:py-40">
      <div className="absolute inset-0 grain opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-cream/15">
              <img src={bagsAll} alt="Presentaciones Café Barbosa" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <div className="md:col-span-7 md:pt-8">
            <Reveal>
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-cream/70">
                Servicio de maquila
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
                Tostamos <em className="font-script not-italic text-cream">tu café</em> en nuestra planta torrefactora.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
                Disponemos de una planta torrefactora propia donde procesamos
                café tostado para otros productores de la región. Trabajamos
                con tus lotes para resaltar lo mejor de cada origen.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-cream/15 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={0.1 + i * 0.1}>
                  <div className="h-full bg-coffee p-6 md:p-7">
                    <div className="font-serif text-2xl text-cream/70">{s.n}</div>
                    <div className="mt-3 text-base font-medium">{s.t}</div>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
