import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
import bag200 from "@/assets/bag-200.jpg";
import bag400 from "@/assets/bag-400.jpg";
import bag2500 from "@/assets/bag-2500.jpg";

const products = [
  {
    img: bag200,
    weight: "200 g",
    name: "Special Blend",
    desc: "Ideal para descubrir el perfil del café o llevar a cualquier parte.",
    msg: "Holaaa! Quiero pedir la presentación de 200g ☕",
  },
  {
    img: bag400,
    weight: "400 g",
    name: "Special Blend",
    desc: "El formato preferido para el consumo diario en casa o la oficina.",
    msg: "Holaaa! Quiero pedir la presentación de 400g ☕",
    featured: true,
  },
  {
    img: bag2500,
    weight: "2.5 kg",
    name: "Formato cafetería",
    desc: "Pensado para cafeterías, restaurantes y consumidores frecuentes.",
    msg: "Holaaa! Quiero pedir la presentación de 2.5kg ☕",
  },
];

export function Products() {
  return (
    <section id="productos" className="relative overflow-hidden bg-primary py-28 text-primary-foreground md:py-40">
      <div className="absolute inset-0 grain opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-cream/70">
                Nuestros productos
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
                Tres presentaciones, <em className="font-script not-italic text-cream">disponibles</em> en grano o molido.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-cream/80">
              Café 100% colombiano de la asociación, registro Invima
              NSA‑004122‑2017. Elige tu presentación y te lo despachamos.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {products.map((p, i) => (
            <Reveal key={p.weight} delay={i * 0.12}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-cream ring-1 ring-cream/20 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_oklch(0_0_0/0.5)]">
                {p.featured && (
                  <span className="absolute right-5 top-5 z-10 rounded-full bg-wine px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-wine-foreground">
                    Más pedido
                  </span>
                )}
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5">
                  <img
                    src={p.img}
                    alt={`Café Barbosa ${p.weight}`}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-3xl text-foreground">{p.weight}</h3>
                  </div>
                  <div className="mt-1 text-sm font-medium text-primary">{p.name}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                  <div className="mt-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="rounded-full border border-border px-3 py-1.5">Grano</span>
                    <span className="rounded-full border border-border px-3 py-1.5">Molido</span>
                  </div>

                  <div className="mt-8 flex-1" />
                  <WhatsAppButton message={p.msg} variant={p.featured ? "wine" : "primary"}>
                    Pedir por WhatsApp
                  </WhatsAppButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
