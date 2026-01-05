import { Instagram, MapPin, MessageCircle } from "lucide-react";
import bunkerLogoBlack from "@/assets/bunker-logo-black.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const MenuHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="relative">
      {/* Top dark green navbar - Puffy style */}
      <nav className="header-bar">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo in navbar */}
          <div className="flex items-center">
            <img
              src={bunkerLogoBlack}
              alt="BUNKER Coffee Roaster"
              className="h-12 md:h-14 w-auto object-contain"
              style={{ maxWidth: '200px' }}
            />
          </div>

          {/* Social icons & Language Switcher */}
          <div className="flex items-center gap-5">
            <LanguageSwitcher />

            <a
              href="https://instagram.com/bunker_coffee_roaster"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://maps.google.com/?q=Bunker+Coffee+Roaster+Abu+Dhabi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
              aria-label="Location"
            >
              <MapPin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/971508838618"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Marquee Text Loop */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-text">
              {t('enjoy_coffee')} •
            </span>
          ))}
          {[...Array(6)].map((_, i) => (
            <span key={`dup-${i}`} className="marquee-text">
              {t('enjoy_coffee')} •
            </span>
          ))}
        </div>
      </div>

      {/* Hero section with large logo - Puffy centered style */}
      <div className="relative flex flex-col items-center justify-center py-20 md:py-32 px-6 overflow-hidden">
        {/* Floating decorative particles */}
        <div className="floating-particle" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
        <div className="floating-particle" style={{ top: '60%', right: '20%', animationDelay: '1s' }} />
        <div className="floating-particle" style={{ top: '40%', right: '10%', animationDelay: '2s' }} />
        <div className="floating-particle" style={{ top: '70%', left: '25%', animationDelay: '1.5s' }} />

        {/* Logo image - main branding with animation */}
        <div className="text-center mb-6">
          <img
            src={bunkerLogoBlack}
            alt="BUNKER Coffee Roaster"
            className="logo-morph h-40 md:h-64 lg:h-80 w-auto mx-auto object-contain"
            style={{ maxWidth: '800px' }}
          />
        </div>

        {/* Tagline - Puffy "Brighten Your Day" style */}
        <div className="text-center mt-6" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s forwards', opacity: 0 }}>
          <p className="hero-tagline">
            {t('specialty_coffee')}
          </p>
        </div>

        {/* Hours - Puffy style */}
        <div className="text-center mt-3" style={{ animation: 'fadeInUp 0.8s ease-out 0.5s forwards', opacity: 0 }}>
          <p className="text-sm md:text-base tracking-[0.2em] text-muted-foreground">
            {t('opening_hours')}
          </p>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
