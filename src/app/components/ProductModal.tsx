import { X, Check } from "lucide-react";
import { useEffect, useState } from "react";

export interface ProductData {
  name: string;
  tag: string;
  status: string;
  description: string;
  features: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductData | null;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  /* ── Mobile: bottom sheet ─────────────────────────────── */
  if (isMobile) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-end"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/75"
          style={{ backdropFilter: "blur(4px)" }}
        />

        {/* Bottom Sheet */}
        <div
          className="relative w-full overflow-y-auto"
          style={{
            height: "90vh",
            background: "#1A1A2E",
            borderRadius: "16px 16px 0 0",
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(#1A1A2E, #1A1A2E), linear-gradient(135deg, #7B5EA7, #6B8DC4, #5BC8C0)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            WebkitOverflowScrolling: "touch",
            animation: "slideUp 250ms ease-out",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full bg-white/20" />
          </div>

          <div className="p-6">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            {/* Tag and Status */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#7B5EA7]/20 to-[#5BC8C0]/20 border border-[#7B5EA7]/30">
                <span className="text-xs font-semibold text-[#5BC8C0] uppercase tracking-wide">
                  {product.tag}
                </span>
              </div>
              <div
                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                  product.status === "Disponível" ||
                  product.status === "Available" ||
                  product.status === "Disponible"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}
              >
                {product.status}
              </div>
            </div>

            {/* Product Name */}
            <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
              {product.name}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-7">
              {product.description}
            </p>

            {/* Features Section */}
            <h3 className="text-xl font-bold text-white mb-4">Funcionalidades</h3>
            <div className="space-y-4 pb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BC8C0]/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-[#5BC8C0]" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  /* ── Desktop: centered modal (unchanged) ─────────────── */
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75"
        style={{ backdropFilter: "blur(4px)" }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[680px] max-h-[90vh] overflow-y-auto bg-[#1A1A2E] rounded-2xl p-8 animate-in zoom-in-95 duration-200"
        style={{
          backgroundImage:
            "linear-gradient(#1A1A2E, #1A1A2E), linear-gradient(135deg, #7B5EA7, #6B8DC4, #5BC8C0)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          border: "1px solid transparent",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#5BC8C0]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        {/* Tag and Status */}
        <div className="flex items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#7B5EA7]/20 to-[#5BC8C0]/20 border border-[#7B5EA7]/30">
            <span className="text-xs font-semibold text-[#5BC8C0] uppercase tracking-wide">
              {product.tag}
            </span>
          </div>
          <div
            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
              product.status === "Disponível" ||
              product.status === "Available" ||
              product.status === "Disponible"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            }`}
          >
            {product.status}
          </div>
        </div>

        {/* Product Name */}
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#7B5EA7] via-[#6B8DC4] to-[#5BC8C0] bg-clip-text text-transparent">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-8">{product.description}</p>

        {/* Illustration Placeholder */}
        <div className="w-full h-64 bg-[#0D0D0D] rounded-lg flex items-center justify-center mb-8">
          <span className="text-gray-500 text-sm">Ilustração do sistema</span>
        </div>

        {/* Features Section */}
        <h3 className="text-2xl font-bold text-white mb-6">Funcionalidades</h3>

        <div className="space-y-4">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#5BC8C0]/20 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-[#5BC8C0]" />
              </div>
              <p className="text-gray-300 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
