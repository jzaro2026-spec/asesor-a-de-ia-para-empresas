import { useState } from 'react';
import { X, Mail, Copy, Check, MapPin, Send, ArrowUpRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetSubject?: string;
}

export function ContactModal({ isOpen, onClose, presetSubject }: ContactModalProps) {
  const EMAIL = 'jzaro2026@gmail.com';
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const subject = presetSubject || 'Consulta sobre IA en Logística';

  const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hola José María,\n\nMi nombre es ${name || '[Nombre]'} de la empresa ${company || '[Empresa]'}.\n\n${message || 'Me pongo en contacto para consultar sus servicios de asesoría / formación en IA aplicada a la logística.'}\n\nUn cordial saludo.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Cerrar ventana de contacto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
          <Mail className="w-4 h-4" />
          <span>Contacto Directo</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Contactar con José María
        </h3>

        <p className="text-sm text-slate-300 mb-6">
          Asesor y formador en Inteligencia Artificial en logística · Illescas (Toledo).
        </p>

        {/* Email quick copy box */}
        <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 mb-6 flex items-center justify-between gap-3">
          <div className="truncate font-mono text-sm sm:text-base font-semibold text-white">
            {EMAIL}
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-medium rounded-md bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Quick form fields */}
        <div className="space-y-3.5 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-slate-300 mb-1">Su nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre y cargo"
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">Empresa</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Nombre de empresa"
                className="w-full px-3 py-2 text-sm rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">Mensaje breve</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="¿Qué reto o formación necesita su almacén?"
              className="w-full px-3 py-2 text-sm rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <a
            href={mailtoUrl}
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all cursor-pointer shadow-md"
          >
            <Send className="w-4 h-4 text-slate-900" />
            <span>Abrir correo pre-redactado</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </a>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Illescas (Toledo) · Respuesta en menos de 24h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
