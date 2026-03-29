import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { Language, languageNames, languageCodes } from "../i18n/translations";
import { smoothScrollTo } from "../utils/scroll";
import { useLocation, useNavigate } from "react-router";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsLangDropdownOpen(false);
    if (isLangDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isLangDropdownOpen]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, fallbackId?: string) => {
    e.preventDefault();
    
    // If not on main page, navigate to main page first
    if (!isMainPage) {
      navigate(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      smoothScrollTo(sectionId);
    } else if (fallbackId) {
      smoothScrollTo(fallbackId);
    }
  };

  const handleLogoClick = () => {
    if (!isMainPage) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    if (!isMainPage) {
      navigate("/#section-produtos");
    } else {
      smoothScrollTo("section-produtos");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-white">TechMinds</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleLogoClick();
              }}
              className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
            >
              {t.nav.home}
            </a>
            <a 
              href="#section-sobre" 
              onClick={(e) => handleNavClick(e, 'section-sobre')}
              className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
            >
              {t.nav.about}
            </a>
            <a 
              href="#section-produtos" 
              onClick={(e) => handleNavClick(e, 'section-produtos')}
              className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
            >
              {t.nav.products}
            </a>
            <a 
              href="#section-contato" 
              onClick={(e) => handleNavClick(e, 'section-contato')}
              className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Language Switcher + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1A2E] border border-[#5BC8C0]/30 text-white hover:border-[#5BC8C0] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
              >
                <span className="font-semibold">{languageCodes[language]}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 min-w-[180px] bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg shadow-xl overflow-hidden">
                  {(['pt', 'en', 'es'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors cursor-pointer ${
                        language === lang
                          ? 'bg-gradient-to-r from-[#7B5EA7] to-[#5BC8C0] text-white'
                          : 'text-gray-300 hover:bg-[#5BC8C0]/10'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleCTAClick}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] text-white font-semibold hover:shadow-lg hover:shadow-[#7B5EA7]/30 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
            >
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}