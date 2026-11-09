import { Mail, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & positioning */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">
              José María Maroto Lázaro
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs sm:text-sm">
              Asesor y formador en Inteligencia Artificial aplicada a la logística y gestión de almacenes. Más de 24 años de experiencia en operativa real de almacén y silos.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Illescas (Toledo) · Castilla-La Mancha</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Navegación
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">
                  Sobre mí y trayectoria
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios de asesoría y cursos
                </a>
              </li>
              <li>
                <a href="#aplicaciones-ia" className="hover:text-white transition-colors">
                  Aplicaciones prácticas de la IA
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">
                  Experiencia laboral (+24 años)
                </a>
              </li>
              <li>
                <a href="#formacion" className="hover:text-white transition-colors">
                  Formación y certificaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Contacto directo
            </div>
            <a
              href="mailto:jzaro2026@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="break-all">jzaro2026@gmail.com</span>
            </a>
            <p className="text-xs text-slate-400 leading-normal">
              Atención a empresas de Castilla-La Mancha y sur de Madrid.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} José María Maroto Lázaro. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-3">
            <span>Logística & Silos</span>
            <span aria-hidden="true">·</span>
            <span>Inteligencia Artificial</span>
            <span aria-hidden="true">·</span>
            <span>Castilla-La Mancha</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
