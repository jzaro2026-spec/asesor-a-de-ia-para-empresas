import { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface AiAssessmentToolProps {
  onOpenContact: (subject?: string) => void;
}

export function AiAssessmentTool({ onOpenContact }: AiAssessmentToolProps) {
  const [warehouseType, setWarehouseType] = useState('paletizado');
  const [systemType, setSystemType] = useState('sap');
  const [bottleneck, setBottleneck] = useState('inventario');

  const getDiagnosis = () => {
    switch (bottleneck) {
      case 'inventario':
        return {
          title: 'Prioridad: Cuadre de stock y detección preventiva de descuadres',
          recommendation:
            'Apoyo con herramientas sencillas para el cruce de datos entre conteos físicos y su sistema de gestión (' +
            (systemType === 'sap' ? 'SAP' : systemType === 'ulises' ? 'Ulises' : systemType === 'rps' ? 'RPS' : 'Radiofrecuencia') +
            '), facilitando la localización de descuadres antes de que afecten a la preparación.',
          timeframe: 'Enfoque práctico',
          serviceRecommended: 'Asesoría y acompañamiento con José María'
        };
      case 'onboarding':
        return {
          title: 'Prioridad: Guías interactivas y material de apoyo para el operario',
          recommendation:
            'Elaboración de pautas claras y asistentes de consulta rápida para que el personal de nueva incorporación conozca los procedimientos y normas del almacén con autonomía.',
          timeframe: 'Enfoque formativo',
          serviceRecommended: 'Curso para equipos y mandos intermedios'
        };
      case 'incidencias':
        return {
          title: 'Prioridad: Comunicación estructurada de incidencias con fotografía',
          recommendation:
            'Procedimiento ágil en muelle: ante mercancía dañada, el sistema asiste en la redacción de la reclamación y la recopilación de datos del albarán para documentar la incidencia.',
          timeframe: 'Enfoque operativo',
          serviceRecommended: 'Asesoría adaptada a operativa de muelle'
        };
      default:
        return {
          title: 'Prioridad: Asistente de consultas para procedimientos y normativas',
          recommendation:
            'Asistente de consulta directa para que los operarios aclaren dudas de estiba, manipulación o normativas de forma ágil durante su jornada.',
          timeframe: 'Enfoque operativo',
          serviceRecommended: 'Curso práctico para personal de almacén'
        };
    }
  };

  const diagnosis = getDiagnosis();

  return (
    <section className="py-16 sm:py-20 bg-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-700 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Herramienta Interactiva · Diagnóstico Preliminar</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight text-balance">
            ¿Dónde aportará mayor rentabilidad la IA en su almacén?
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Seleccione las características de su operativa para obtener una recomendación preliminar basada en experiencia real de almacén.
          </p>

          {/* Interactive Selectors */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Warehouse Type */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                1. Tipo de operativa
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'paletizado', label: 'Estantería paletizada / Silo' },
                  { id: 'picking', label: 'Picking intensivo de cajas' },
                  { id: 'mixto', label: 'Almacén industrial mixto' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setWarehouseType(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      warehouseType === item.id
                        ? 'bg-slate-900 text-white font-semibold shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: System Type */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                2. Sistema principal
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'sap', label: 'SAP' },
                  { id: 'ulises', label: 'Ulises' },
                  { id: 'rps', label: 'RPS' },
                  { id: 'radiofrecuencia', label: 'Radiofrecuencia' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSystemType(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      systemType === item.id
                        ? 'bg-slate-900 text-white font-semibold shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Main Bottleneck */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                3. Cuello de botella clave
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'inventario', label: 'Descuadres de stock e inventario' },
                  { id: 'onboarding', label: 'Tiempo formando operarios nuevos' },
                  { id: 'incidencias', label: 'Mercancía rota y reclamaciones' },
                  { id: 'procedimientos', label: 'Dudas sobre procedimientos e informes' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBottleneck(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      bottleneck === item.id
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Diagnosis Result Card */}
          <div className="mt-8 p-6 sm:p-7 rounded-xl bg-slate-900 text-white border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                Dictamen operativo preliminar
              </div>
              <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{diagnosis.timeframe}</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                {diagnosis.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {diagnosis.recommendation}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Solución recomendada: <strong className="text-slate-200 font-semibold">{diagnosis.serviceRecommended}</strong>
              </div>

              <button
                type="button"
                onClick={() => onOpenContact(`Diagnóstico Web: ${diagnosis.title}`)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Solicitar propuesta para este diagnóstico</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
