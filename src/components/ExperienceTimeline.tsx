import { CheckCircle, MapPin, Briefcase } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/logisticsData';

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Historial profesional
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Más de 24 años de experiencia en logística y almacén
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Puestos principales desempeñados a lo largo de más de 24 años de trayectoria: Responsable de silo, Jefe de servicio, Jefe de equipo, Carretillero y operador de puente grúa, y Preparador de pedidos.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 md:ml-8 space-y-10">
          {WORK_EXPERIENCE.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline marker icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 border-slate-50 bg-blue-600 text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card wrapper */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-slate-300 transition-all">
                {/* Header row with unboxed metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {item.role === 'Responsable de silo' ? 'Responsable de silo – FAC Seguridad' : item.role}
                    </h3>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-1.5">
                    {item.role !== 'Responsable de silo' && (
                      <>
                        <span className="text-slate-800 font-medium">{item.company}</span>
                        <span aria-hidden="true">·</span>
                      </>
                    )}
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 mb-6">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Systems & Tools used */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
                    Entorno y sistemas:
                  </span>
                  {item.systemsUsed.map((sys) => (
                    <span
                      key={sys}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom summary note */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-sm sm:text-base text-slate-700">
            <strong>Experiencia acumulada verificable:</strong> Gestión directa de equipos de hasta 5 personas, resolución diaria de no conformidades con transportistas y control de stock permanente bajo auditoría.
          </p>
        </div>
      </div>
    </section>
  );
}
