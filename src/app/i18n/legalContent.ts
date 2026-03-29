import { Language } from './translations';

export interface SectionInfo {
  id: string;
  title: string;
}

// ─── Section titles per language ─────────────────────────────────────────────

export const termsSections: Record<Language, SectionInfo[]> = {
  pt: [
    { id: 'section-1',  title: '1. Aceitação dos Termos' },
    { id: 'section-2',  title: '2. Modificações e Encargos' },
    { id: 'section-3',  title: '3. Segurança e Integridade do Dispositivo' },
    { id: 'section-4',  title: '4. Conectividade e Dados Móveis' },
    { id: 'section-5',  title: '5. Limitação de Responsabilidade' },
    { id: 'section-6',  title: '6. Tecnologia de IA e Análise Facial' },
    { id: 'section-7',  title: '7. Privacidade e Dados' },
    { id: 'section-8',  title: '8. Publicidade e Serviços de Terceiros' },
    { id: 'section-9',  title: '9. Atualizações e Encerramento' },
    { id: 'section-10', title: '10. Alterações a estes Termos' },
    { id: 'section-11', title: '11. Legislação Aplicável e Foro' },
    { id: 'section-12', title: '12. Contato' },
  ],
  en: [
    { id: 'section-1',  title: '1. Acceptance of Terms' },
    { id: 'section-2',  title: '2. Modifications and Fees' },
    { id: 'section-3',  title: '3. Device Security and Integrity' },
    { id: 'section-4',  title: '4. Connectivity and Mobile Data' },
    { id: 'section-5',  title: '5. Limitation of Liability' },
    { id: 'section-6',  title: '6. AI Technology and Facial Analysis' },
    { id: 'section-7',  title: '7. Privacy and Data' },
    { id: 'section-8',  title: '8. Advertising and Third-Party Services' },
    { id: 'section-9',  title: '9. Updates and Service Termination' },
    { id: 'section-10', title: '10. Changes to These Terms' },
    { id: 'section-11', title: '11. Applicable Law and Jurisdiction' },
    { id: 'section-12', title: '12. Contact' },
  ],
  es: [
    { id: 'section-1',  title: '1. Aceptación de los Términos' },
    { id: 'section-2',  title: '2. Modificaciones y Cargos' },
    { id: 'section-3',  title: '3. Seguridad e Integridad del Dispositivo' },
    { id: 'section-4',  title: '4. Conectividad y Datos Móviles' },
    { id: 'section-5',  title: '5. Limitación de Responsabilidad' },
    { id: 'section-6',  title: '6. Tecnología de IA y Análisis Facial' },
    { id: 'section-7',  title: '7. Privacidad y Datos' },
    { id: 'section-8',  title: '8. Publicidad y Servicios de Terceros' },
    { id: 'section-9',  title: '9. Actualizaciones y Cierre del Servicio' },
    { id: 'section-10', title: '10. Cambios en estos Términos' },
    { id: 'section-11', title: '11. Legislación Aplicable y Jurisdicción' },
    { id: 'section-12', title: '12. Contacto' },
  ],
};

export const privacySections: Record<Language, SectionInfo[]> = {
  pt: [
    { id: 'section-1',  title: '1. Informações que Coletamos' },
    { id: 'section-2',  title: '2. Permissões do Dispositivo' },
    { id: 'section-3',  title: '3. Uso de IA e Biometria' },
    { id: 'section-4',  title: '4. Publicidade e Terceiros' },
    { id: 'section-5',  title: '5. Finalidade e Base Legal' },
    { id: 'section-6',  title: '6. Compartilhamento de Dados' },
    { id: 'section-7',  title: '7. Retenção e Segurança' },
    { id: 'section-8',  title: '8. Seus Direitos (LGPD)' },
    { id: 'section-9',  title: '9. Privacidade de Crianças' },
    { id: 'section-10', title: '10. Transferência Internacional' },
    { id: 'section-11', title: '11. Alterações nesta Política' },
    { id: 'section-12', title: '12. Contato' },
  ],
  en: [
    { id: 'section-1',  title: '1. Information We Collect' },
    { id: 'section-2',  title: '2. Device Permissions' },
    { id: 'section-3',  title: '3. AI and Biometric Data Use' },
    { id: 'section-4',  title: '4. Advertising and Third Parties' },
    { id: 'section-5',  title: '5. Purpose and Legal Basis' },
    { id: 'section-6',  title: '6. Data Sharing' },
    { id: 'section-7',  title: '7. Retention and Security' },
    { id: 'section-8',  title: '8. Your Rights (LGPD)' },
    { id: 'section-9',  title: "9. Children's Privacy" },
    { id: 'section-10', title: '10. International Data Transfer' },
    { id: 'section-11', title: '11. Changes to This Policy' },
    { id: 'section-12', title: '12. Contact' },
  ],
  es: [
    { id: 'section-1',  title: '1. Información que Recopilamos' },
    { id: 'section-2',  title: '2. Permisos del Dispositivo' },
    { id: 'section-3',  title: '3. Uso de IA y Biometría' },
    { id: 'section-4',  title: '4. Publicidad y Terceros' },
    { id: 'section-5',  title: '5. Finalidad y Base Legal' },
    { id: 'section-6',  title: '6. Compartición de Datos' },
    { id: 'section-7',  title: '7. Retención y Seguridad' },
    { id: 'section-8',  title: '8. Tus Derechos (LGPD)' },
    { id: 'section-9',  title: '9. Privacidad de Menores' },
    { id: 'section-10', title: '10. Transferencia Internacional' },
    { id: 'section-11', title: '11. Cambios en esta Política' },
    { id: 'section-12', title: '12. Contacto' },
  ],
};

// ─── Product card metadata per language ──────────────────────────────────────

export interface LegalProductMeta {
  vibecutTag: string;
  vibecutLastUpdated: string;
  groomTag: string;
  zonemapTag: string;
  escolaConectadaTag: string;
  termsInPrep: string;
  policyInPrep: string;
}

export const legalProductMeta: Record<Language, LegalProductMeta> = {
  pt: {
    vibecutTag: 'Inteligência Artificial',
    vibecutLastUpdated: '11 de fevereiro de 2026',
    groomTag: 'Gestão & Automação',
    zonemapTag: 'Mapas Interativos',
    escolaConectadaTag: 'Gestão Educacional',
    termsInPrep: 'Termos em elaboração',
    policyInPrep: 'Política em elaboração',
  },
  en: {
    vibecutTag: 'Artificial Intelligence',
    vibecutLastUpdated: 'February 11, 2026',
    groomTag: 'Management & Automation',
    zonemapTag: 'Interactive Maps',
    escolaConectadaTag: 'Educational Management',
    termsInPrep: 'Terms in preparation',
    policyInPrep: 'Policy in preparation',
  },
  es: {
    vibecutTag: 'Inteligencia Artificial',
    vibecutLastUpdated: '11 de febrero de 2026',
    groomTag: 'Gestión & Automatización',
    zonemapTag: 'Mapas Interactivos',
    escolaConectadaTag: 'Gestión Educativa',
    termsInPrep: 'Términos en elaboración',
    policyInPrep: 'Política en elaboración',
  },
};

// ─── Cross-link helpers ───────────────────────────────────────────────────────

export const crossLinkLabels: Record<Language, { toPrivacy: string; toTerms: string }> = {
  pt: {
    toPrivacy: 'Política de Privacidade do',
    toTerms: 'Termos e Condições do',
  },
  en: {
    toPrivacy: 'Privacy Policy for',
    toTerms: 'Terms of Use for',
  },
  es: {
    toPrivacy: 'Política de Privacidad del',
    toTerms: 'Términos y Condiciones del',
  },
};
