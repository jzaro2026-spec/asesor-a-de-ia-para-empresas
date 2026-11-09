import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { AiApplications } from './components/AiApplications';
import { AiAssessmentTool } from './components/AiAssessmentTool';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Training } from './components/Training';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState<string | undefined>(undefined);

  const handleOpenContact = (subject?: string) => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  const handleCloseContact = () => {
    setModalOpen(false);
    setModalSubject(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="flex-grow">
        {/* Section 1: Portada (Hero) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Section 2: Sobre mí (Trayectoria y Valores) */}
        <About onOpenContact={handleOpenContact} />

        {/* Section 3: Servicios (Asesoría y Cursos) */}
        <Services onOpenContact={handleOpenContact} />

        {/* Section 4: Aplicaciones de la IA en logística (Bento Grid 21st.dev style) */}
        <AiApplications onOpenContact={handleOpenContact} />

        {/* Interactive Logistics AI Assessment Tool */}
        <AiAssessmentTool onOpenContact={handleOpenContact} />

        {/* Section 5: Experiencia (Línea de tiempo) */}
        <ExperienceTimeline />

        {/* Section 6: Formación (IA 120h, FP, Carnets) */}
        <Training />

        {/* Section 7: Contacto (Illescas, email, mailto generator) */}
        <ContactSection initialSubject={modalSubject} />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer />

      {/* Quick Contact Modal Popover */}
      <ContactModal
        isOpen={modalOpen}
        onClose={handleCloseContact}
        presetSubject={modalSubject}
      />
    </div>
  );
}
