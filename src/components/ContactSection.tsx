import { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, MessageSquare, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export function ContactSection({ initialSubject }: ContactSectionProps) {
  const EMAIL = 'jzaro2026@gmail.com';
  const [copied, setCopied] = useState(false);
  const [serviceType, setServiceType] = useState<string>(
    initialSubject?.includes('Formación') ? 'formacion' : 'asesoria'
  );
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const serviceOptions = [
    { id: 'asesoria', label: 'Asesoría en IA para almacén', subject: 'Consulta sobre Asesoría de IA en Almacén' },
    { id: 'formacion', label: 'Curso de IA para equipo logístico', subject: 'Propuesta de Curso de IA para Equipo' },
    { id: 'general', label: 'Consulta general o visita', subject: 'Contacto con José María Maroto' }
  ];

  const currentOption = serviceOptions.find(o => o.id === serviceType) || serviceOptions[0];
  const finalSubject = currentOption.subject;

  const buildMailtoUrl = () => {
    const bodyLines = [
      `Estimado José María,`,
      ``,
      `Mi nombre es ${senderName || '[Nombre]'} de la empresa ${senderCompany || '[Empresa]'}.`,
      ``,
      `Motivo de la consulta: ${currentOption.label}`,
      ``,
      `Mensaje:`,
      message || 'Nos gustaría conocer cómo puede ayudarnos a aplicar Inteligencia Artificial en nuestras operaciones logísticas y almacén.',
      ``,
      `Un cordial saludo.`
    ].filter(Boolean).join('\n');

    return `mailto:${EMAIL}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(bodyLines)}`;
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Contacto directo
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            Hablemos de su almacén y de cómo la IA puede resolver sus retos reales
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin intermediarios ni comerciales de ventas. Contacte directamente con José María Maroto Lázaro para valorar su caso o solicitar una propuesta formativa en Castilla-La Mancha.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct contact info & quick actions */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email main card */}
            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-lg">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                Correo electrónico oficial
              </div>
              <div className="text-lg sm:text-xl font-mono font-bold text-white break-all select-all mb-4">
                {EMAIL}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Contacto%20desde%20la%20web%20-%20IA%20Logística`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors text-center whitespace-nowrap cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-900" />
                  <span>Escribir correo</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  title="Copiar email al portapapeles"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location card */}
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Illescas (Toledo) · Castilla-La Mancha
                  </h4>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    Estratégicamente situado en el eje logístico de La Sagra (A-42). Disponibilidad para reuniones y formaciones presenciales en polígonos de Toledo, Talavera, Madrid Sur, Guadalajara, Ciudad Real y Albacete.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidence markers */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Respuesta en menos de 24 horas laborables.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Confidencialidad absoluta sobre los datos y operativa de su almacén.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-composed email helper / Interactive Contact Assistant */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-800/90 border border-slate-700 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>Asistente de contacto por correo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Redacte su consulta en un instante
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Seleccione el motivo de su consulta y abra su programa de correo habitual (Outlook, Gmail o cliente nativo) con el texto ya estructurado.
              </p>

              {/* Service selector tabs (functional buttons) */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                  ¿En qué podemos colaborar?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setServiceType(opt.id)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg text-left transition-all cursor-pointer ${
                        serviceType === opt.id
                          ? 'bg-blue-600 text-white font-semibold shadow-sm'
                          : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Su nombre o cargo
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Ej. Carlos Gómez (Director Operaciones)"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Empresa y municipio
                    </label>
                    <input
                      type="text"
                      value={senderCompany}
                      onChange={(e) => setSenderCompany(e.target.value)}
                      placeholder="Ej. Logística Sagra S.L., Illescas"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Detalles de la consulta o reto en almacén
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Indique brevemente qué necesitan: optimizar inventarios, formar al personal de turno, reducir incidencias con transportistas..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit action */}
                <div className="pt-2">
                  <a
                    href={buildMailtoUrl()}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all cursor-pointer shadow-lg active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-slate-900" />
                    <span>Abrir correo preparado para enviar</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </a>

                  <p className="mt-3 text-center text-xs text-slate-400">
                    Se abrirá su cliente de correo predeterminado dirigido a <strong className="text-slate-200">{EMAIL}</strong> con el asunto y texto ya listos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
