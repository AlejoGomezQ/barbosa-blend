import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-background pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-10">
        <div className="grid gap-12 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Café Barbosa" className="h-12 w-12 rounded-full" />
              <span className="font-serif text-lg text-foreground">Café Barbosa</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Asociación de caficultores de Barbosa, Antioquia. Café 100%
              colombiano, perfilado en laboratorio propio.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Registro Invima NSA‑004122‑2017
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-foreground">Navegación</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li><a href="#nosotros" className="transition-colors hover:text-primary">Nosotros</a></li>
              <li><a href="#perfil" className="transition-colors hover:text-primary">Perfil</a></li>
              <li><a href="#productos" className="transition-colors hover:text-primary">Productos</a></li>
              <li><a href="#maquila" className="transition-colors hover:text-primary">Maquila</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-[0.3em] text-foreground">Contacto</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground/70">Dirección</span>
                Carrera 21 No. 11‑30, Barbosa, Antioquia<br />
                Centro de transformación agrícola
              </li>
              <li>
                <a href="https://wa.me/573014975996" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                  +57 301 497 5996 · WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:asprocafesba@gmail.com" className="transition-colors hover:text-primary">
                  asprocafesba@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Café Barbosa · Asprocafesba. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
