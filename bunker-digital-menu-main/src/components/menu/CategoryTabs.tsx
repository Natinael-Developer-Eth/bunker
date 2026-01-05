import { menuCategories } from "@/data/menuData";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

type CategoryTabsProps = {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
};

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const { t } = useLanguage();

  return (
    <nav className="sticky-nav shadow-md">
      <div className="px-6 py-4">
        <div className="flex items-center gap-8 md:gap-10 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => onCategoryChange("all")}
            className={cn(
              "category-tab whitespace-nowrap shrink-0",
              activeCategory === "all" && "active"
            )}
          >
            {t('cat_all')}
          </button>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "category-tab whitespace-nowrap shrink-0",
                activeCategory === category.id && "active"
              )}
            >
              {t(`cat_${category.id.replace(/-/g, '_')}`)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryTabs;
