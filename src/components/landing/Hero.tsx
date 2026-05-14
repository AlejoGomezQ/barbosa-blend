import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import logo from "@/assets/logo.png";
import cherries from "@/assets/cherries.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#productos", label: "Productos" },
    { href: "#perfil", label: "Perfil" },
    { href: "#maquila", label: "Maquila" },
  ];

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-primary text-primary-foreground">
      {/* Background image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={cherries}
          alt=""
          className="h-full w-full object-cover scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/55 to-primary/85" />
        <div className="absolute inset-0 grain opacity-30 mix-blend-overlay" />
      </motion.div>

      {/* Nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Café Barbosa" className="h-12 w-12 rounded-full ring-1 ring-cream/30 md:h-14 md:w-14" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#nosotros" className="opacity-80 transition-opacity hover:opacity-100">Nosotros</a>
          <a href="#perfil" className="opacity-80 transition-opacity hover:opacity-100">Perfil</a>
          <a href="#productos" className="opacity-80 transition-opacity hover:opacity-100">Productos</a>
          <a href="#maquila" className="opacity-80 transition-opacity hover:opacity-100">Maquila</a>
        </nav>
        <div className="hidden md:block">
          <WhatsAppButton size="md" variant="wine">Pedir café</WhatsAppButton>
        </div>
      </header>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl flex-col justify-center px-6 py-16 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl"
        >
          Café de finca, <em className="font-script not-italic text-cream/95">cosechado</em> por trece familias en Barbosa, Antioquia.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg"
        >
          Buscamos mostrar el café que producen las fincas como un producto de excelente calidad, diferenciado por sus atributos en taza que lo caracterizan por su fragancia y aroma.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <WhatsAppButton size="lg" variant="wine">Pedir por WhatsApp</WhatsAppButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
