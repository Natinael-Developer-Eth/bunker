import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    en: {
        "specialty_coffee": "Specialty Coffee",
        "opening_hours": "7:00 AM - 11:00 PM Daily",
        "enjoy_coffee": "ENJOY YOUR COFFEE",
        "all_rights_reserved": "All rights reserved © 2026 Bunker Coffee Roaster.",
        "developed_by": "Developed By",
        "profile_1": "Natinael Eliyas",
        "profile_2": "Professional Full-Stack Developer",
        "contact": "Contact",
        "abu_dhabi": "Abu Dhabi",
        "powered_by": "Powered by BEYIN",
        // Categories
        "cat_hot_coffee": "Coffee",
        "cat_iced_coffee": "Iced",
        "cat_tea": "Tea",
        "cat_mocktails": "Mocktails",
        "cat_smoothies": "Smoothies",
        "cat_sweets": "Desserts",
        "cat_all": "All",
    },
    ar: {
        "specialty_coffee": "قهوة مختصة",
        "opening_hours": "٧:٠٠ ص - ١١:٠٠ م يومياً",
        "enjoy_coffee": "استمتع بقهوتك",
        "all_rights_reserved": "جميع الحقوق محفوظة © ٢٠٢٦ بنكر محمصة القهوة.",
        "developed_by": "تطوير بواسطة",
        "profile_1": "Natinael Eliyas",
        "profile_2": "مطور ويب محترف",
        "contact": "تواصل",
        "abu_dhabi": "أبوظبي",
        "powered_by": "بدعم من BEYIN",
        // Categories
        "cat_hot_coffee": "قهوة",
        "cat_iced_coffee": "مثلج",
        "cat_tea": "شاي",
        "cat_mocktails": "موكتيل",
        "cat_smoothies": "سموذي",
        "cat_sweets": "حلويات",
        "cat_all": "الكل",
    }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isRTL: language === 'ar' }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
