import { Mail, Phone, MessageCircle, Send, Check } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { useState, useRef } from "react";

export function FinalCTA() {
  const { t } = useI18n();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const contactItems = [
    {
      icon: Mail,
      label: "E-mail",
      value: "business@techminds.net.br",
      copyValue: "business@techminds.net.br",
      href: "mailto:business@techminds.net.br",
      copyable: true
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (51) 8054-7148",
      copyValue: "+55 (51) 8054-7148",
      href: "tel:+555180547148",
      copyable: true
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chamar no WhatsApp",
      href: "https://wa.me/555180547148",
      external: true,
      copyable: false
    },
    {
      icon: Send,
      label: "Telegram",
      value: "Chamar no Telegram",
      href: "https://t.me/+5551980547148",
      external: true,
      copyable: false
    }
  ];

  const copyToClipboard = (text: string, index: number) => {
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
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      } catch (e) {
        // silent fail
      }
      document.body.removeChild(textarea);
    };

    // Modern Clipboard API with fallback
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 2000);
        })
        .catch(() => {
          copyWithFallback();
        });
    } else {
      copyWithFallback();
    }
  };

  const handleClick = (e: React.MouseEvent, item: typeof contactItems[0], index: number) => {
    if (item.copyable) {
      e.preventDefault();
      copyToClipboard(item.copyValue, index);
    }
  };

  return (
    <section id="section-contato" className="relative bg-[#0D0D0D] py-24 px-6 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7B5EA7]/20 via-[#6B8DC4]/20 to-[#5BC8C0]/20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t.finalCTA.title}
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Entre em contato pelo canal que preferir. Nossa equipe está pronta para te atender.
        </p>

        {/* Contact Items Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isCopied = copiedIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <div key={index} className="relative">
                <a
                  href={item.copyable ? undefined : item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleClick(e, item, index)}
                  onMouseEnter={(e) => {
                    setHoveredIndex(index);
                    e.currentTarget.style.backgroundColor = '#1E1E35';
                    e.currentTarget.style.borderImage = 'linear-gradient(135deg, #7B5EA7, #6B8DC4, #5BC8C0) 1';
                  }}
                  onMouseLeave={(e) => {
                    setHoveredIndex(null);
                    e.currentTarget.style.backgroundColor = '#1A1A2E';
                    e.currentTarget.style.borderImage = 'none';
                  }}
                  className="group relative flex items-center gap-4 p-6 rounded-lg border border-white/10 transition-all duration-200 overflow-hidden"
                  style={{
                    backgroundColor: '#1A1A2E',
                    cursor: item.copyable ? 'pointer' : 'pointer'
                  }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#7B5EA7]/20 to-[#5BC8C0]/20 flex items-center justify-center border border-[#7B5EA7]/30 group-hover:border-[#5BC8C0] transition-colors">
                    <Icon className="w-6 h-6 text-[#5BC8C0]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-semibold text-gray-400 mb-1">{item.label}</div>
                    <div className="text-white font-medium group-hover:text-[#5BC8C0] transition-colors relative min-h-[24px]">
                      {/* Original content */}
                      <span 
                        className="inline-flex items-center gap-2 transition-opacity duration-150"
                        style={{ 
                          opacity: isCopied ? 0 : 1,
                          position: isCopied ? 'absolute' : 'static'
                        }}
                      >
                        {item.value}
                      </span>
                      
                      {/* Copied state */}
                      {isCopied && (
                        <span 
                          className="inline-flex items-center gap-2 text-[#5BC8C0] transition-opacity duration-150"
                          style={{ opacity: 1 }}
                        >
                          <Check className="w-4 h-4" />
                          Copiado!
                        </span>
                      )}
                    </div>
                  </div>
                </a>
                
                {/* Tooltip */}
                {item.copyable && isHovered && !isCopied && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg text-xs text-white whitespace-nowrap animate-fade-in pointer-events-none z-50">
                    Clique para copiar
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
