export interface ApplicationUseCase {
  id: string;
  title: string;
  area: string;
  summary: string;
  practicalExample: string;
  warehouseBenefit: string;
  realProblemSolved: string;
  tools: string[];
}

export const AI_APPLICATIONS: ApplicationUseCase[] = [
  {
    id: 'asistentes-bots',
    title: 'Asistentes y Bots para el Operario',
    area: 'Operativa de almacén',
    summary: 'Consultas inmediatas en lenguaje natural sobre ubicaciones, fichas de producto, protocolos y normativas de carga.',
    practicalExample: 'Un operario o carretillero consulta desde la PDA o dispositivo móvil dudas sobre protocolos de estiba o especificaciones de clientes, recibiendo la indicación clara sin interrumpir la operativa ni desplazarse a la oficina.',
    warehouseBenefit: 'Resolución ágil de dudas en el almacén y reducción de interrupciones al supervisor.',
    realProblemSolved: 'Pérdida de tiempo en desplazamientos a oficina para consultar manuales o dudas repetitivas.',
    tools: ['Asistentes de consulta', 'Dispositivos de almacén', 'Fichas técnicas']
  },
  {
    id: 'control-stock',
    title: 'Control de Stock e Inventarios Inteligentes',
    area: 'Gestión de existencias',
    summary: 'Detección temprana de descuadres entre el sistema de gestión y el stock físico, además de apoyo en inventarios.',
    practicalExample: 'Análisis de movimientos y discrepancias en conteos para identificar referencias o ubicaciones con riesgo de desviación antes de que afecten a la preparación de pedidos.',
    warehouseBenefit: 'Mayor fiabilidad en inventarios y prevención de roturas imprevistas de stock.',
    realProblemSolved: 'Llegar a la ubicación indicada por el sistema y encontrar el hueco vacío o con producto erróneo.',
    tools: ['SAP', 'Ulises', 'RPS', 'Radiofrecuencia']
  },
  {
    id: 'gestion-incidencias',
    title: 'Gestión y Clasificación de Incidencias',
    area: 'Recepción y expedición',
    summary: 'Registro ágil de no conformidades, mercancía dañada y comunicación estructurada de incidencias con fotografía.',
    practicalExample: 'Al detectar mercancía deteriorada o mal acondicionada en muelle, el sistema facilita la tipificación del daño y la redacción formal de la reclamación con los datos del albarán y las imágenes adjuntas.',
    warehouseBenefit: 'Documentación clara y completa de cada incidencia sin sobrecargar de burocracia al equipo.',
    realProblemSolved: 'Reservas genéricas en albaranes que dificultan la posterior reclamación.',
    tools: ['Registro fotográfico', 'Modelos estructurados', 'Plantillas de reclamación']
  },
  {
    id: 'formacion-personal',
    title: 'Formación y Onboarding del Personal',
    area: 'Recursos y equipos',
    summary: 'Guías interactivas y material práctico adaptado a las tareas diarias para facilitar la incorporación del personal.',
    practicalExample: 'Elaboración de manuales claros y asistidos para que nuevas incorporaciones comprendan los procesos del almacén, las rutas de preparación y las normas de seguridad del centro.',
    warehouseBenefit: 'Facilita la adaptación operativa del personal de nueva incorporación.',
    realProblemSolved: 'Dedicación excesiva de los operarios veteranos a repetir explicaciones básicas de operativa.',
    tools: ['Guías operativas', 'Pautas de seguridad', 'Checklists de trabajo']
  },
  {
    id: 'informes-procedimientos',
    title: 'Redacción de Informes y Procedimientos',
    area: 'Dirección y calidad',
    summary: 'Redacción estructurada de notas de cambio de turno, incidencias relevantes y procedimientos de trabajo.',
    practicalExample: 'Estructuración ágil de la información relevante de cada turno (movimientos principales, incidencias y tareas pendientes) para que el relevo comience con total claridad.',
    warehouseBenefit: 'Comunicación clara y ordenada entre turnos de trabajo.',
    realProblemSolved: 'Pérdida de información en los cambios de turno o procedimientos sin documentar.',
    tools: ['Resúmenes de turno', 'Procedimientos operativos', 'Control de incidencias']
  }
];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  highlights: string[];
  systemsUsed: string[];
}

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Responsable de silo',
    company: 'FAC Seguridad',
    location: 'Castilla-La Mancha',
    highlights: [
      'Gestión de silo automatizado y almacén.',
      'Control de inventarios, stock y ubicaciones.',
      'Resolución de incidencias en recepción, preparación y expedición.',
      'Gestión y coordinación de equipos de hasta 5 personas con foco en la responsabilidad y el buen trato.',
      'Aplicación de criterios de orden y mejora continua en la operativa diaria.'
    ],
    systemsUsed: ['SAP', 'Ulises', 'RPS', 'Radiofrecuencia']
  },
  {
    role: 'Jefe de servicio',
    company: 'Logística y distribución',
    location: 'Castilla-La Mancha',
    highlights: [
      'Coordinación operativa de las actividades del almacén y cumplimiento de los niveles de servicio.',
      'Supervisión de recepciones, preparación de pedidos y expediciones.',
      'Control de inventarios y seguimiento de incidencias con clientes y proveedores.',
      'Formación y supervisión continua del personal operativo.'
    ],
    systemsUsed: ['SAP', 'Ulises', 'RPS', 'Radiofrecuencia']
  },
  {
    role: 'Jefe de equipo',
    company: 'Almacén y logística',
    location: 'Castilla-La Mancha',
    highlights: [
      'Organización de las tareas diarias del equipo en muelle y pasillos.',
      'Distribución de la carga de trabajo y atención a las prioridades del día.',
      'Mantenimiento del orden en muelles de carga y zonas de preparación.',
      'Trato directo y resolución constructiva de incidencias con el equipo.'
    ],
    systemsUsed: ['Radiofrecuencia', 'SAP', 'Ulises', 'RPS']
  },
  {
    role: 'Carretillero y operador de puente grúa',
    company: 'Instalaciones logísticas e industriales',
    location: 'Castilla-La Mancha',
    highlights: [
      'Manejo de carretillas elevadoras y puente grúa para manutención de cargas.',
      'Ubicación y desalojo de palés en altura con estricto cumplimiento de la seguridad.',
      'Carga y descarga de camiones en muelles.'
    ],
    systemsUsed: ['Radiofrecuencia']
  },
  {
    role: 'Preparador de pedidos',
    company: 'Almacenes de distribución',
    location: 'Castilla-La Mancha',
    highlights: [
      'Preparación de pedidos (picking) y acondicionado de mercancía (packing).',
      'Uso de terminales de radiofrecuencia para lectura de ubicaciones y artículos.',
      'Verificación de bultos y albaranes contra pedido.'
    ],
    systemsUsed: ['Radiofrecuencia']
  }
];

export interface EducationItem {
  title: string;
  institution: string;
  details: string;
  badgeText: string;
}

export const EDUCATION_LIST: EducationItem[] = [
  {
    title: 'Curso de Inteligencia Artificial (120 horas)',
    institution: 'Cámara de Comercio de Toledo',
    details: 'Formación especializada en aplicaciones de la inteligencia artificial orientada a la productividad empresarial, herramientas de asistencia y automatización de tareas.',
    badgeText: '120 horas lectivas'
  },
  {
    title: 'Formación Profesional en Administración (FP)',
    institution: 'Castilla-La Mancha',
    details: 'Formación en gestión administrativa, organización documental, procedimientos mercantiles y control de operaciones.',
    badgeText: 'Título Oficial'
  },
  {
    title: 'Carnet de Carretillero',
    institution: 'Centro Homologado',
    details: 'Capacitación teórico-práctica para el manejo seguro de carretillas elevadoras.',
    badgeText: 'Carnet Profesional'
  },
  {
    title: 'Carnet de Puente Grúa',
    institution: 'Centro Homologado',
    details: 'Capacitación para la operación de puente grúa en instalaciones industriales y logísticas.',
    badgeText: 'Carnet Profesional'
  }
];
