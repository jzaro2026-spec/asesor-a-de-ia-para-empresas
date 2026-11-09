import { Check, Shield, Users, Layers, TrendingUp } from 'lucide-react';

interface AboutProps {
  onOpenContact: (subject?: string) => void;
}

export function About({ onOpenContact }: AboutProps) {
  const values = [
    {
      title: 'Responsabilidad',
      description: 'Cuidado riguroso del inventario, los plazos de entrega y, por encima de todo, la seguridad laboral en cada maniobra.',
      icon: Shield
    },
    {
      title: 'Trato con el equipo',
      description: 'Liderazgo cercano con equipos de hasta 5 personas. La tecnología solo tiene éxito cuando el personal de almacén la entiende y la siente como una ayuda real.',
      icon: Users
    },
    {
      title: 'Orden y método',
      description: 'Estandarización de ubicaciones, control de flujos y rigor en cada albarán. La IA multiplica los resultados de un almacén bien organizado.',
      icon: Layers
    },
    {
      title: 'Mejora continua',
      description: 'Búsqueda constante de formas más ágiles de trabajar, eliminando tiempos muertos y tareas burocráticas repetitivas.',
      icon: TrendingUp
    }
  ];

  const systems = ['Radiofrecuencia', 'SAP', 'Ulises', 'RPS'];

  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
            Trayectoria y principios
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            La perspectiva de quien conoce el almacén desde el suelo hasta el tejado
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Más de 24 años de experiencia en logística y almacén: preparador de pedidos, carretillero, jefe de equipo, jefe de servicio y responsable de silo en FAC Seguridad. He formado personal, controlado inventarios y stock, resuelto incidencias y gestionado equipos de hasta 5 personas.
          </p>
        </div>

        {/* 2-Column Split: Generic logistics image + Detailed story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Generic Logistics Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/src/assets/images/warehouse_ai_tablet_operation_1794220659485.jpg"
                alt="Operativa logística y control de existencias en almacén"
                className="w-full h-[420px] sm:h-[460px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-base font-bold">Gestión y operativa logística</div>
                <div className="text-xs text-slate-200 mt-1">
                  Control de stock, inventarios y procesos de almacén
                </div>
                <div className="mt-2 text-xs text-slate-300">
                  Illescas (Toledo) · Castilla-La Mancha
                </div>
              </div>
            </div>

            {/* Systems handled badge strip */}
            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Sistemas habituales de gestión
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                {systems.map((sys) => (
                  <span
                    key={sys}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800"
                  >
                    <Check className="w-3.5 h-3.5 text-blue-600" />
                    <span>{sys}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Story & Values Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p className="text-base sm:text-lg leading-relaxed">
                A lo largo de <strong className="text-slate-900 font-semibold">más de 24 años de experiencia en logística y almacén</strong> he desempeñado las funciones de preparador de pedidos, carretillero y operador de puente grúa, jefe de equipo, jefe de servicio y responsable de silo en FAC Seguridad. He formado a personal, coordinado equipos de hasta 5 personas, supervisado inventarios y stock, y resuelto incidencias en entornos reales con radiofrecuencia, SAP, Ulises y RPS.
              </p>

              <p className="text-base leading-relaxed">
                Con el curso de <strong className="text-slate-900 font-semibold">Inteligencia Artificial de 120 horas de la Cámara de Comercio de Toledo</strong>, ayudo a las empresas a aplicar herramientas de IA en las tareas cotidianas de almacén, con la visión real, cercana y práctica de quien ha trabajado en el sector.
              </p>
            </div>

            {/* Core Values 2x2 Grid */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Principios y valores de trabajo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className="p-5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center text-blue-800 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-base font-bold text-slate-900">{val.title}</h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-normal">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA directly from about */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenContact('Consulta sobre asesoría o formación con José María')}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                Hablar con José María
              </button>
              <a
                href="#experiencia"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4"
              >
                Consultar trayectoria cronológica →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
