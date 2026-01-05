import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage('en')}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 ${language === 'en' ? 'border-primary' : 'border-transparent'} hover:scale-110 transition-transform`}
                title="English"
            >
                <span className="text-xl">🇺🇸</span>
            </Button>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage('ar')}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 ${language === 'ar' ? 'border-primary' : 'border-transparent'} hover:scale-110 transition-transform`}
                title="Arabic"
            >
                <span className="text-xl">🇦🇪</span>
            </Button>
        </div>
    );
};

export default LanguageSwitcher;
