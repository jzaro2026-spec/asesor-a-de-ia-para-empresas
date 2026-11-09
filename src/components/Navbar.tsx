import { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (subject?: string) => void;
}

export function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Aplicaciones IA', href: '#aplicaciones-ia' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Formación', href: '#formacion' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            José María Maroto Lázaro
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
            >
              <Mail className="w-4 h-4 text-slate-900" />
              <span>Contactar</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenContact()}
              className="sm:hidden inline-flex items-center px-3 py-1.5 text-xs font-semibold text-slate-900 bg-white rounded-md whitespace-nowrap"
            >
              Contactar
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="text-xs font-mono text-slate-400 px-3 py-1">
            Castilla-La Mancha · Asesoría en IA Logística
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contactar por correo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
