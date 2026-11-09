import { ArrowRight, Mail, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenContact: (subject?: string) => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Background subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Regional & discipline kicker (clean unboxed text with typographic separator) */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-6">
          <span className="flex items-center gap-1.5 text-blue-400">
            <MapPin className="w-4 h-4 shrink-0" />
            Illescas, Toledo · Castilla-La Mancha
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Asesoría y Formación In-Company</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">24+ años en operativa logística</span>
        </div>

        {/* 2-Column Split: Editorial headline & CTAs on left, High-impact warehouse asset on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight lg:leading-[1.15] text-balance">
              Inteligencia Artificial aplicada con la visión real de quien pisa el almacén
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Soy <strong className="text-white font-semibold">José María Maroto Lázaro</strong>, asesor y formador en IA para logística con más de 24 años de experiencia en logística y almacén. Ayudo a las empresas a implantar soluciones de IA útiles, sencillas y adaptadas a la realidad operativa.
            </p>

            {/* Direct action triggers */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenContact('Solicitud de Asesoría en IA Logística')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <Mail className="w-5 h-5 text-slate-900" />
                <span>Contactar</span>
              </button>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Explorar servicios y cursos</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Credibility highlights */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Gestión de equipos, control de stock y operativa diaria sin teoría abstracta.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Sistemas de gestión: radiofrecuencia, SAP, Ulises y RPS.</span>
              </div>
            </div>
          </div>

          {/* Right Visual Carrier: Generic modern warehouse photo */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-800 shadow-2xl">
              <img
                src="/src/assets/images/hero_modern_logistics_warehouse_1794220659478.jpg"
                alt="Instalación logística con almacenamiento en estanterías industriales"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
              
              {/* Generic overlay note */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-xs sm:text-sm">
                <div className="font-semibold text-white">
                  Operativa logística y gestión de almacenamiento
                </div>
                <div className="text-slate-300 mt-1 text-xs">
                  Cámara de Comercio de Toledo (IA 120 h) · Asesoría y formación
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Bottom Metric / Fact Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-slate-300">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
              +24 años
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Experiencia real en almacenes y logística
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              120 horas
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Especialización en IA (Cámara de Toledo)
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              SAP · Ulises · RPS
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Radiofrecuencia y gestión de almacén
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Castilla-La Mancha
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">
              Illescas y corredor logístico de La Sagra
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
