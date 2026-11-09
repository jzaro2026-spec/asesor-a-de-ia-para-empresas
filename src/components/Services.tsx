import { CheckCircle2, ArrowRight, Building2, GraduationCap, Clock, Award } from 'lucide-react';

interface ServicesProps {
  onOpenContact: (subject?: string) => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Servicios profesionales
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Soluciones prácticas para transformar su almacén sin complicaciones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Servicios orientados a resultados tangibles para empresas de Castilla-La Mancha. La tecnología debe adaptarse al ritmo diario del almacén y a las personas que lo operan.
          </p>
        </div>

        {/* 2 Main Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Service 01: Asesoría */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  01. Consultoría directa
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  <Building2 className="w-3.5 h-3.5 text-slate-700" />
                  Para empresas y operadores
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Asesoría a empresas para aplicar IA en logística
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Ayuda práctica a empresas de logística y almacén para incorporar herramientas de inteligencia artificial útiles en su operativa diaria, sin complicaciones innecesarias.
              </p>

              {/* What is included */}
              <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Ámbito del servicio de asesoría
                </div>
                
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Selección de herramientas sencillas y adaptadas a cada empresa:</strong> Soluciones accesibles orientadas a las necesidades reales de su almacén.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Acompañamiento para que conviva con el programa de gestión que ya usan:</strong> Integración fluida con entornos basados en radiofrecuencia, SAP, Ulises o RPS.</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenContact('Solicitud de Asesoría de IA para Almacén')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer shadow-sm active:scale-[0.99]"
              >
                <span>Solicitar información de asesoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 text-center text-xs text-slate-500">
                Atención directa por José María · Sin intermediarios
              </div>
            </div>
          </div>

          {/* Service 02: Cursos de formación */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 sm:p-10 flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                  02. Formación in-company
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-700" />
                  Para equipos y mandos
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Cursos de IA para equipos de almacén y mandos intermedios
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Formación eminentemente práctica impartida con el lenguaje de quien trabaja en el almacén. Sin tecnicismos informáticos innecesarios, orientada a que jefes de equipo, administrativos de muelle y operarios dominen asistentes de IA en su trabajo diario.
              </p>

              {/* What is included */}
              <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Contenidos y características del curso
                </div>

                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Asistentes de IA en el muelle:</strong> Consultas de normativas, estiba, fichas de seguridad y procedimientos.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Resolución de incidencias:</strong> Redacción estructurada de reclamaciones con fotos de mercancía dañada.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Informes de relevo y comunicación entre turnos:</strong> Redacción ágil de notas de turno y tareas pendientes.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Modalidad flexible:</strong> Presencial en instalaciones de Castilla-La Mancha o sesiones online adaptadas a turnos.</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenContact('Propuesta de Curso de IA para Equipo Logístico')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all cursor-pointer shadow-sm active:scale-[0.99]"
              >
                <span>Solicitar propuesta de formación</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </button>
              <div className="mt-3 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Formatos y horarios adaptados a las necesidades de la empresa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Focus Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              Proximidad geográfica
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Atención presencial en los polígonos industriales de Castilla-La Mancha
            </h4>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Ubicado en Illescas, en pleno corazón logístico de La Sagra (A-42). Desplazamiento ágil a Toledo, Talavera de la Reina, Guadalajara, Ciudad Real, Albacete y sur de Madrid.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Consulta sobre disponibilidad y visita a instalaciones')}
            className="px-5 py-2.5 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0"
          >
            Consultar disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
}
