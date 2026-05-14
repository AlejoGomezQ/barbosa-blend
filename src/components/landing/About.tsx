import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="nosotros" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-wine">
            Quiénes somos
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl">
            Una sola <em className="font-script not-italic text-wine">historia</em> en cada taza.
          </h2>
        </Reveal>

        {/* Línea de tiempo / cifras */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
          {[
            { k: "2013", v: "Año de fundación", d: "Nacimos integrando caficultores de distintas veredas." },
            { k: "13", v: "Familias asociadas", d: "Comprometidas con prácticas sostenibles y desarrollo social." },
            { k: "+100", v: "Personas impactadas", d: "Beneficiarios indirectos que fortalecen el tejido social y económico de la región." },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 0.1} className="bg-cream p-8 md:p-10">
              <div className="font-serif text-4xl text-primary md:text-5xl">{item.k}</div>
              <div className="mt-2 text-sm font-medium text-foreground">{item.v}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">Nuestra historia</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Nace en 2013, integrando caficultores de diferentes veredas
                del municipio de Barbosa, distinguidos por sus buenas
                prácticas en el manejo del cultivo, la conservación de los
                recursos naturales en sus fincas y el compromiso con el
                desarrollo social de sus familias y su entorno.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">Laboratorio de calidad</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Contamos con un laboratorio propio que nos permite perfilar
                los cafés de los asociados, identificando lotes especiales
                para ofrecer a quienes desean disfrutar una experiencia
                superior en cada preparación.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
