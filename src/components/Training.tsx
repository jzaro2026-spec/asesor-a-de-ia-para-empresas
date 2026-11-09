import { Award, BookOpen, Truck, ShieldCheck, Check } from 'lucide-react';
import { EDUCATION_LIST } from '../data/logisticsData';

export function Training() {
  const iconList = [Award, BookOpen, Truck, ShieldCheck];

  return (
    <section id="formacion" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Cualificación y certificaciones
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Formación técnica, administrativa y especialización en IA
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Una combinación de gestión administrativa y habilitación técnica de maquinaria con la formación más reciente en Inteligencia Artificial aplicada a la empresa.
          </p>
        </div>

        {/* Highlighted AI Course Card (Cámara de Comercio de Toledo) */}
        <div className="mb-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 -mt-8 -mr-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/80 mb-4">
                <Award className="w-4 h-4 text-blue-400" />
                <span>120 Horas Lectivas · Formación Especializada</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Curso de Inteligencia Artificial
              </h3>
              <div className="text-base sm:text-lg font-semibold text-blue-200 mb-4">
                Cámara Oficial de Comercio, Industria y Servicios de Toledo
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Capacitación intensiva en el aprovechamiento empresarial de la Inteligencia Artificial: ingeniería de prompts, modelos de lenguaje, asistentes operativos, automatización de tareas y análisis inteligente de datos de operaciones.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  IA aplicada a la empresa real
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  Automatización de procesos y documentos
                </span>
                <span className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  Productividad y optimización de flujos
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 text-center">
              <div className="text-4xl font-extrabold text-white tracking-tight tabular-nums">
                120 h
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                Certificación en IA
              </div>
              <div className="text-xs text-slate-400 mt-2">
                Impartido y avalado en Castilla-La Mancha
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION_LIST.slice(1).map((item, index) => {
            const Icon = iconList[index + 1];
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-800 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                    {item.badgeText}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <div className="text-xs font-medium text-slate-500 mb-3">
                    {item.institution}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
