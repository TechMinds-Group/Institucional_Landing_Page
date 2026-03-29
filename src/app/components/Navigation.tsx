import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { Language, languageNames, languageCodes } from "../i18n/translations";
import { smoothScrollTo } from "../utils/scroll";
import { useLocation, useNavigate } from "react-router";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isDrawerOpen]);

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

  const handleLanguageChangeMobile = (lang: Language) => {
    setLanguage(lang);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (!isMainPage) {
      navigate(`/#${sectionId}`);
      return;
    }
    smoothScrollTo(sectionId);
  };

  const handleLogoClick = () => {
    if (!isMainPage) {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCTAClick = () => {
    if (!isMainPage) {
      navigate("/#section-produtos");
    } else {
      smoothScrollTo("section-produtos");
    }
  };

  const handleDrawerNavClick = (sectionId: string) => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      if (!isMainPage) {
        navigate(`/#${sectionId}`);
      } else {
        smoothScrollTo(sectionId);
      }
    }, 250);
  };

  const handleDrawerCTAClick = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      if (!isMainPage) {
        navigate("/#section-produtos");
      } else {
        smoothScrollTo("section-produtos");
      }
    }, 250);
  };

  const handleDrawerLogoClick = () => {
    setIsDrawerOpen(false);
    setTimeout(() => {
      if (!isMainPage) {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 250);
  };

  const navLinks = [
    { label: t.nav.home, action: () => handleDrawerNavClick("top"), href: "#" },
    { label: t.nav.about, action: () => handleDrawerNavClick("section-sobre"), href: "#section-sobre" },
    { label: t.nav.products, action: () => handleDrawerNavClick("section-produtos"), href: "#section-produtos" },
    { label: t.nav.contact, action: () => handleDrawerNavClick("section-contato"), href: "#section-contato" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
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

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleLogoClick(); }}
                className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
              >
                {t.nav.home}
              </a>
              <a
                href="#section-sobre"
                onClick={(e) => handleNavClick(e, "section-sobre")}
                className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
              >
                {t.nav.about}
              </a>
              <a
                href="#section-produtos"
                onClick={(e) => handleNavClick(e, "section-produtos")}
                className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
              >
                {t.nav.products}
              </a>
              <a
                href="#section-contato"
                onClick={(e) => handleNavClick(e, "section-contato")}
                className="text-gray-300 hover:text-white hover:opacity-80 transition-all cursor-pointer"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Desktop: Language Switcher + CTA */}
            <div className="hidden md:flex items-center gap-4">
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
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isLangDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute top-full mt-2 right-0 min-w-[180px] bg-[#1A1A2E] border border-[#5BC8C0] rounded-lg shadow-xl overflow-hidden">
                    {(["pt", "en", "es"] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors cursor-pointer ${
                          language === lang
                            ? "bg-gradient-to-r from-[#7B5EA7] to-[#5BC8C0] text-white"
                            : "text-gray-300 hover:bg-[#5BC8C0]/10"
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

            {/* Mobile: Hamburger Button */}
            <button
              className="md:hidden flex items-center justify-center w-11 h-11 text-white cursor-pointer focus:outline-none"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className="fixed top-0 right-0 h-full z-[70] md:hidden flex flex-col bg-[#111318]"
        style={{
          width: "min(80vw, 300px)",
          borderLeft: "1px solid rgba(91,200,192,0.2)",
          transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 250ms ease-out",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleDrawerLogoClick}
          >
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-white">TechMinds</span>
          </div>
          <button
            className="flex items-center justify-center w-11 h-11 text-white cursor-pointer focus:outline-none"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={link.action}
              className="w-full text-left px-6 text-gray-200 cursor-pointer transition-colors hover:text-[#5BC8C0] hover:bg-white/5"
              style={{
                height: "48px",
                fontSize: "16px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Bottom section: language + CTA */}
        <div className="px-5 py-6 border-t border-white/5 space-y-4">
          {/* Language Pills */}
          <div className="flex gap-2 justify-center">
            {(["pt", "en", "es"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChangeMobile(lang)}
                className={`flex-1 cursor-pointer rounded-full transition-all duration-150 focus:outline-none`}
                style={{
                  height: "32px",
                  fontSize: "14px",
                  fontWeight: 600,
                  background:
                    language === lang
                      ? "linear-gradient(90deg, #7B5EA7, #5BC8C0)"
                      : "transparent",
                  border:
                    language === lang
                      ? "1px solid transparent"
                      : "1px solid rgba(91,200,192,0.35)",
                  color: language === lang ? "#fff" : "rgba(255,255,255,0.7)",
                }}
              >
                {languageCodes[lang]}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleDrawerCTAClick}
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] text-white font-semibold cursor-pointer focus:outline-none"
            style={{ fontSize: "15px" }}
          >
            {t.nav.getStarted}
          </button>
        </div>
      </div>
    </>
  );
}
