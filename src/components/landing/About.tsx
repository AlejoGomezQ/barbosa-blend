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

        <div className="mt-8 grid gap-16 md:grid-cols-12 md:gap-12">
          <Reveal delay={0.1} className="md:col-span-7">
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl">
              Trece familias caficultoras, <em className="font-script not-italic text-wine">una sola</em> historia en cada taza.
            </h2>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-5 md:pt-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-[17px]">
              <p>
                Somos una asociación de trece familias caficultoras de Barbosa,
                Antioquia, conformada para mostrar el café de nuestras fincas
                como un producto de excelente calidad, diferenciado por sus
                atributos en taza, su fragancia y aroma.
              </p>
              <p>
                Las variedades cultivadas en nuestros suelos y la diversidad
                térmica del municipio hacen de este un café especial.
              </p>
            </div>
          </Reveal>
        </div>

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
