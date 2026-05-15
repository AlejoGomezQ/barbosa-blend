import { Reveal } from "./Reveal";
import cup from "@/assets/cup.jpg";

const profile = [
  { label: "Variedad", value: "Caturro · Borbón · Colombia" },
  { label: "Tostión", value: "Media" },
  { label: "Altura", value: "1.300 – 2.000 msnm" },
  { label: "Origen", value: "Barbosa, Antioquia" },
  { label: "Cuerpo", value: "Cremoso" },
  { label: "Acidez", value: "Alta" },
];

const notes = ["Panela", "Caramelo", "Frutos rojos", "Limoncillo", "Chocolate"];

export function CoffeeProfile() {
  return (
    <section id="perfil" className="relative overflow-hidden bg-background py-28 text-foreground md:py-40">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-wine">
            Perfil de taza
          </span>
        </Reveal>

        <div className="mt-8 grid gap-16 md:grid-cols-12 md:gap-12">
          <Reveal delay={0.1} className="md:col-span-7">
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
              Notas <em className="font-script not-italic text-wine">apaneladas</em>, frutos rojos y un final a chocolate.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Una mezcla cuidadosamente perfilada en nuestro laboratorio, con
              cuerpo cremoso y acidez alta. Cada sorbo conserva el carácter
              de la cordillera antioqueña.
            </p>

            {/* Notas en chips */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {notes.map((n, i) => (
                <Reveal key={n} delay={0.2 + i * 0.06}>
                  <span className="inline-flex items-center rounded-full border border-border bg-cream px-4 py-2 text-sm font-medium text-foreground">
                    {n}
                  </span>
                </Reveal>
              ))}
            </div>

            {/* Ficha técnica */}
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border">
              {profile.map((row, i) => (
                <Reveal key={row.label} delay={0.1 + i * 0.05}>
                  <div className="flex items-baseline justify-between gap-6 bg-cream px-6 py-5">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {row.label}
                    </span>
                    <span className="text-right font-serif text-lg text-foreground md:text-xl">
                      {row.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-border">
              <img src={cup} alt="Taza de café tostado" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
