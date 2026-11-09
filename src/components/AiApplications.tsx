import { useState } from 'react';
import { 
  Bot, 
  Boxes, 
  AlertTriangle, 
  GraduationCap, 
  FileText, 
  Check, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { AI_APPLICATIONS, ApplicationUseCase } from '../data/logisticsData';

interface AiApplicationsProps {
  onOpenContact: (subject?: string) => void;
}

export function AiApplications({ onOpenContact }: AiApplicationsProps) {
  const [selectedApp, setSelectedApp] = useState<ApplicationUseCase>(AI_APPLICATIONS[0]);

  const iconsMap: Record<string, typeof Bot> = {
    'asistentes-bots': Bot,
    'control-stock': Boxes,
    'gestion-incidencias': AlertTriangle,
    'formacion-personal': GraduationCap,
    'informes-procedimientos': FileText,
  };

  return (
    <section id="aplicaciones-ia" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Casos de uso reales
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Aplicaciones prácticas de la IA en la operativa diaria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sin proyectos abstractos ni jerga incomprensible. Estas son las cinco áreas concretas donde la inteligencia artificial resuelve los problemas que ocurren a diario en el muelle y los pasillos.
          </p>
        </div>

        {/* Bento Grid layout inspired by 21st.dev modern design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {/* Card 1: Asistentes y Bots (Featured 1) */}
          <div 
            onClick={() => setSelectedApp(AI_APPLICATIONS[0])}
            className={`group rounded-2xl border p-7 transition-all cursor-pointer flex flex-col justify-between ${
              selectedApp.id === AI_APPLICATIONS[0].id
                ? 'bg-blue-50/50 border-blue-600 ring-2 ring-blue-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-5 group-hover:scale-105 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                {AI_APPLICATIONS[0].area}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {AI_APPLICATIONS[0].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {AI_APPLICATIONS[0].summary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
              <span>Ver ejemplo de consulta</span>
              <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Control de Stock e Inventarios */}
          <div 
            onClick={() => setSelectedApp(AI_APPLICATIONS[1])}
            className={`group rounded-2xl border p-7 transition-all cursor-pointer flex flex-col justify-between ${
              selectedApp.id === AI_APPLICATIONS[1].id
                ? 'bg-blue-50/50 border-blue-600 ring-2 ring-blue-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-5 group-hover:scale-105 transition-transform">
                <Boxes className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                {AI_APPLICATIONS[1].area}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {AI_APPLICATIONS[1].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {AI_APPLICATIONS[1].summary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
              <span>Ver control de stock e inventario</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Gestión de Incidencias */}
          <div 
            onClick={() => setSelectedApp(AI_APPLICATIONS[2])}
            className={`group rounded-2xl border p-7 transition-all cursor-pointer flex flex-col justify-between ${
              selectedApp.id === AI_APPLICATIONS[2].id
                ? 'bg-blue-50/50 border-blue-600 ring-2 ring-blue-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-5 group-hover:scale-105 transition-transform">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
                {AI_APPLICATIONS[2].area}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {AI_APPLICATIONS[2].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {AI_APPLICATIONS[2].summary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
              <span>Ver reclamación de transporte</span>
              <ArrowRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Formación de Personal */}
          <div 
            onClick={() => setSelectedApp(AI_APPLICATIONS[3])}
            className={`group rounded-2xl border p-7 transition-all cursor-pointer flex flex-col justify-between ${
              selectedApp.id === AI_APPLICATIONS[3].id
                ? 'bg-blue-50/50 border-blue-600 ring-2 ring-blue-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mb-5 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-1">
                {AI_APPLICATIONS[3].area}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {AI_APPLICATIONS[3].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {AI_APPLICATIONS[3].summary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
              <span>Ver método de onboarding</span>
              <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Redacción de Informes y Procedimientos (Spans 2 columns on lg) */}
          <div 
            onClick={() => setSelectedApp(AI_APPLICATIONS[4])}
            className={`group lg:col-span-2 rounded-2xl border p-7 transition-all cursor-pointer flex flex-col justify-between ${
              selectedApp.id === AI_APPLICATIONS[4].id
                ? 'bg-blue-50/50 border-blue-600 ring-2 ring-blue-600/20'
                : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 mb-5 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                {AI_APPLICATIONS[4].area}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {AI_APPLICATIONS[4].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                {AI_APPLICATIONS[4].summary} Estandarización de procedimientos de trabajo, notas de calidad e informes de cambio de turno.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900">
              <span>Ver automatización de informes</span>
              <ArrowRight className="w-4 h-4 text-slate-700 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Interactive Deep-Dive Explorer (Selected Card Detail) */}
        <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white overflow-hidden shadow-xl">
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Detalle operativo seleccionado · {selectedApp.area}</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedApp.title}
              </h4>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    El problema habitual en almacén:
                  </div>
                  <p className="text-sm text-slate-200">
                    {selectedApp.realProblemSolved}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    Solución con IA aplicada:
                  </div>
                  <p className="text-sm text-slate-200">
                    {selectedApp.practicalExample}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-emerald-400 font-medium">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Beneficio directo: {selectedApp.warehouseBenefit}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenContact(`Consulta sobre ${selectedApp.title}`)}
                  className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Consultar aplicación en mi almacén
                </button>
                <div className="text-xs text-slate-400">
                  Herramientas: {selectedApp.tools.join(' · ')}
                </div>
              </div>
            </div>

            {/* Visual preview slot on right of detail */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-800 shadow-md">
                <img
                  src="/src/assets/images/warehouse_ai_tablet_operation_1794220659485.jpg"
                  alt="Operario de logística usando tablet digital para control en almacén"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 bg-slate-900/80 backdrop-blur-sm p-2.5 rounded-lg border border-slate-700">
                  Aplicación directa a pie de pasillo y muelle, sin requerir cambios traumáticos de software.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
