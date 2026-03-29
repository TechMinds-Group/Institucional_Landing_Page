import { ReactNode, useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nContext";

interface LegalPageWrapperProps {
  children: ReactNode;
  onLanguageChange?: (language: string) => void;
}

export function LegalPageWrapper({ children, onLanguageChange }: LegalPageWrapperProps) {
  const { language } = useI18n();
  const [contentOpacity, setContentOpacity] = useState(1);

  useEffect(() => {
    // Fade out
    setContentOpacity(0);
    
    // Wait for fade, then trigger language change callback and fade in
    const timeout = setTimeout(() => {
      onLanguageChange?.(language);
      setContentOpacity(1);
    }, 150);

    return () => clearTimeout(timeout);
  }, [language, onLanguageChange]);

  return (
    <div 
      style={{ 
        opacity: contentOpacity,
        transition: 'opacity 150ms ease-in-out'
      }}
    >
      {children}
    </div>
  );
}
