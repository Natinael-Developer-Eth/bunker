import { MapPin } from "lucide-react";
import bunkerLogoBlack from "@/assets/bunker-logo-black.png";
import { useLanguage } from "@/contexts/LanguageContext";

const MenuFooter = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="px-6 py-14 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Two column layout like Puffy */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand logo */}
            <div className="flex items-center">
              <img
                src={bunkerLogoBlack}
                alt="BUNKER Coffee Roaster"
                className="h-14 md:h-16 w-auto object-contain"
                style={{ maxWidth: '220px' }}
              />
            </div>

            {/* Location - Puffy style */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm tracking-wider uppercase">
                {t('abu_dhabi')}
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-12 pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
              {t('all_rights_reserved')}
            </p>
            <p className="text-xs text-muted-foreground/60 tracking-wider mt-2">
              {t('powered_by')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;
