import { useEffect, useRef } from "react";
import { MenuCategory } from "@/data/menuData";
import MenuItem from "./MenuItem";
import { useLanguage } from "@/contexts/LanguageContext";

type MenuSectionProps = {
  category: MenuCategory;
  showTitle?: boolean;
};

const MenuSection = ({ category, showTitle = true }: MenuSectionProps) => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for title animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-category-id={category.id}
      id={`category-${category.id}`}
      className="px-6 md:px-8 scroll-mt-32"
    >
      {showTitle && (
        <div
          ref={titleRef}
          className="scroll-reveal py-10 md:py-14 border-b border-border/40"
        >
          <h2 className="section-title">
            {t(`cat_${category.id.replace(/-/g, '_')}`)}
          </h2>
        </div>
      )}

      <div>
        {category.items.map((item, index) => (
          <MenuItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
