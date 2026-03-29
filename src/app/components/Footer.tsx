import { Github, Mail, MessageCircle, Send, Check } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "../i18n/I18nContext";
import { useState } from "react";

interface FooterProps {
  onProductClick?: (productName: string) => void;
}

export function Footer({ onProductClick }: FooterProps) {
  const { t } = useI18n();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [hoveredEmail, setHoveredEmail] = useState<string | null>(null);
  const [emailIconCopied, setEmailIconCopied] = useState(false);

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // 80px offset for navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string, callback: () => void) => {
    const copyWithFallback = () => {
      // Fallback for non-secure contexts or older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        callback();
      } catch (e) {
        // silent fail
      }
      document.body.removeChild(textarea);
    };

    // Modern Clipboard API with fallback
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => {
          callback();
        })
        .catch(() => {
          copyWithFallback();
        });
    } else {
      copyWithFallback();
    }
  };

  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    copyToClipboard(email, () => {
      setCopiedEmail(email);
      setTimeout(() => {
        setCopiedEmail(null);
      }, 2000);
    });
  };

  const handleEmailIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    copyToClipboard('business@techminds.net.br', () => {
      setEmailIconCopied(true);
      setTimeout(() => {
        setEmailIconCopied(false);
      }, 2000);
    });
  };

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/*
          Mobile:  single column stack (all 5 columns)
          Tablet:  logo full-width, then 2-col rows
          Desktop: 6-col grid as before
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 md:gap-12 mb-12">
          {/* Logo and tagline — full span on desktop */}
          <div className="sm:col-span-2 md:col-span-2">
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer group"
              onClick={handleLogoClick}
            >
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold text-white group-hover:text-[#5BC8C0] transition-colors duration-150">
                TechMinds
              </span>
            </div>
            <p className="text-gray-400 mb-6">{t.footer.tagline}</p>

            {/* Quick Access Icons */}
            <div className="flex gap-4">
              {/* GitHub */}
              <div className="relative">
                <a
                  href="https://github.com/TechMinds-Group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center text-[#5BC8C0] hover:brightness-125 transition-all"
                  onMouseEnter={() => setHoveredIcon('github')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <Github className="w-5 h-5" />
                </a>
                {hoveredIcon === 'github' && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    GitHub
                  </div>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <button
                  onClick={handleEmailIconClick}
                  onMouseEnter={() => setHoveredIcon('email')}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center text-[#5BC8C0] hover:brightness-125 transition-all cursor-pointer border-0 outline-none"
                  style={{ cursor: 'pointer' }}
                >
                  {emailIconCopied ? (
                    <Check className="w-5 h-5 text-[#5BC8C0] transition-opacity duration-150" />
                  ) : (
                    <Mail className="w-5 h-5 transition-opacity duration-150" />
                  )}
                </button>
                {hoveredIcon === 'email' && !emailIconCopied && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    Clique para copiar o e-mail
                  </div>
                )}
              </div>

              {/* WhatsApp */}
              <div className="relative">
                <a
                  href="https://wa.me/555180547148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center text-[#5BC8C0] hover:brightness-125 transition-all"
                  onMouseEnter={() => setHoveredIcon('whatsapp')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                {hoveredIcon === 'whatsapp' && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    WhatsApp
                  </div>
                )}
              </div>

              {/* Telegram */}
              <div className="relative">
                <a
                  href="https://t.me/+5551980547148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A1A2E] flex items-center justify-center text-[#5BC8C0] hover:brightness-125 transition-all"
                  onMouseEnter={() => setHoveredIcon('telegram')}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <Send className="w-5 h-5" />
                </a>
                {hoveredIcon === 'telegram' && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    Telegram
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white font-semibold mb-4"
              style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-3">
              {t.footer.productLinks.map((link, index) => (
                <li key={index} style={{ lineHeight: "36px" }}>
                  <button
                    onClick={() => onProductClick?.(link)}
                    className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 cursor-pointer text-left"
                    style={{ fontSize: "15px" }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4"
              style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-3">
              <li style={{ lineHeight: "36px" }}>
                <button
                  onClick={() => handleSmoothScroll('section-sobre')}
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 cursor-pointer"
                  style={{ fontSize: "15px" }}
                >
                  {t.footer.companyLinks[0]}
                </button>
              </li>
              <li style={{ lineHeight: "36px" }}>
                <button
                  onClick={() => handleSmoothScroll('section-contato')}
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 cursor-pointer"
                  style={{ fontSize: "15px" }}
                >
                  {t.footer.companyLinks[1]}
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4"
              style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-3">
              <li style={{ lineHeight: "36px" }}>
                <a
                  href="/terms-of-use"
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 cursor-pointer"
                  style={{ fontSize: "15px" }}
                >
                  {t.footer.legalLinks[0]}
                </a>
              </li>
              <li style={{ lineHeight: "36px" }}>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 cursor-pointer"
                  style={{ fontSize: "15px" }}
                >
                  {t.footer.legalLinks[1]}
                </a>
              </li>
            </ul>
          </div>

          {/* Contatos Column */}
          <div>
            <h4 className="text-white font-semibold mb-4"
              style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}
            >
              Contatos
            </h4>
            <ul className="space-y-3">
              {/* Business Email */}
              <li className="relative" style={{ lineHeight: "36px" }}>
                <button
                  onClick={(e) => handleCopyEmail(e, 'business@techminds.net.br')}
                  onMouseEnter={() => setHoveredEmail('business')}
                  onMouseLeave={() => setHoveredEmail(null)}
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 text-left border-0 bg-transparent p-0 outline-none"
                  style={{ cursor: 'pointer', fontSize: "15px" }}
                >
                  <span className="relative inline-block min-h-[20px]">
                    <span
                      className="transition-opacity duration-150"
                      style={{
                        opacity: copiedEmail === 'business@techminds.net.br' ? 0 : 1,
                        position: copiedEmail === 'business@techminds.net.br' ? 'absolute' : 'static'
                      }}
                    >
                      business@techminds.net.br
                    </span>
                    {copiedEmail === 'business@techminds.net.br' && (
                      <span className="text-[#5BC8C0] transition-opacity duration-150" style={{ opacity: 1 }}>
                        Copiado ✓
                      </span>
                    )}
                  </span>
                </button>
                {hoveredEmail === 'business' && copiedEmail !== 'business@techminds.net.br' && (
                  <div className="absolute -top-10 left-0 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    Clique para copiar
                  </div>
                )}
              </li>

              {/* Careers Email */}
              <li className="relative" style={{ lineHeight: "36px" }}>
                <button
                  onClick={(e) => handleCopyEmail(e, 'careers@techminds.net.br')}
                  onMouseEnter={() => setHoveredEmail('careers')}
                  onMouseLeave={() => setHoveredEmail(null)}
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 text-left border-0 bg-transparent p-0 outline-none"
                  style={{ cursor: 'pointer', fontSize: "15px" }}
                >
                  <span className="relative inline-block min-h-[20px]">
                    <span
                      className="transition-opacity duration-150"
                      style={{
                        opacity: copiedEmail === 'careers@techminds.net.br' ? 0 : 1,
                        position: copiedEmail === 'careers@techminds.net.br' ? 'absolute' : 'static'
                      }}
                    >
                      careers@techminds.net.br
                    </span>
                    {copiedEmail === 'careers@techminds.net.br' && (
                      <span className="text-[#5BC8C0] transition-opacity duration-150" style={{ opacity: 1 }}>
                        Copiado ✓
                      </span>
                    )}
                  </span>
                </button>
                {hoveredEmail === 'careers' && copiedEmail !== 'careers@techminds.net.br' && (
                  <div className="absolute -top-10 left-0 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    Clique para copiar
                  </div>
                )}
              </li>

              {/* Support Email */}
              <li className="relative" style={{ lineHeight: "36px" }}>
                <button
                  onClick={(e) => handleCopyEmail(e, 'support@techminds.net.br')}
                  onMouseEnter={() => setHoveredEmail('support')}
                  onMouseLeave={() => setHoveredEmail(null)}
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 text-left border-0 bg-transparent p-0 outline-none"
                  style={{ cursor: 'pointer', fontSize: "15px" }}
                >
                  <span className="relative inline-block min-h-[20px]">
                    <span
                      className="transition-opacity duration-150"
                      style={{
                        opacity: copiedEmail === 'support@techminds.net.br' ? 0 : 1,
                        position: copiedEmail === 'support@techminds.net.br' ? 'absolute' : 'static'
                      }}
                    >
                      support@techminds.net.br
                    </span>
                    {copiedEmail === 'support@techminds.net.br' && (
                      <span className="text-[#5BC8C0] transition-opacity duration-150" style={{ opacity: 1 }}>
                        Copiado ✓
                      </span>
                    )}
                  </span>
                </button>
                {hoveredEmail === 'support' && copiedEmail !== 'support@techminds.net.br' && (
                  <div className="absolute -top-10 left-0 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    Clique para copiar
                  </div>
                )}
              </li>

              {/* Compliance Email */}
              <li className="relative" style={{ lineHeight: "36px" }}>
                <button
                  onClick={(e) => handleCopyEmail(e, 'compliance@techminds.net.br')}
                  onMouseEnter={() => setHoveredEmail('compliance')}
                  onMouseLeave={() => setHoveredEmail(null)}
                  className="text-gray-400 hover:text-[#5BC8C0] transition-colors duration-150 text-left border-0 bg-transparent p-0 outline-none"
                  style={{ cursor: 'pointer', fontSize: "15px" }}
                >
                  <span className="relative inline-block min-h-[20px]">
                    <span
                      className="transition-opacity duration-150"
                      style={{
                        opacity: copiedEmail === 'compliance@techminds.net.br' ? 0 : 1,
                        position: copiedEmail === 'compliance@techminds.net.br' ? 'absolute' : 'static'
                      }}
                    >
                      compliance@techminds.net.br
                    </span>
                    {copiedEmail === 'compliance@techminds.net.br' && (
                      <span className="text-[#5BC8C0] transition-opacity duration-150" style={{ opacity: 1 }}>
                        Copiado ✓
                      </span>
                    )}
                  </span>
                </button>
                {hoveredEmail === 'compliance' && copiedEmail !== 'compliance@techminds.net.br' && (
                  <div className="absolute -top-10 left-0 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    Clique para copiar
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-center text-gray-500 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}