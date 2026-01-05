import { useEffect, useRef } from "react";
import { MenuItem as MenuItemType } from "@/data/menuData";
import { ImageIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type MenuItemProps = {
  item: MenuItemType;
  index: number;
};

const MenuItem = ({ item, index }: MenuItemProps) => {
  const { language } = useLanguage();
  const itemRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const displayName = (language === 'ar' && item.nameAr) ? item.nameAr : item.name;
  const displayDescription = (language === 'ar' && item.descriptionAr) ? item.descriptionAr : item.description;

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to trigger animations
            if (textRef.current) {
              textRef.current.classList.add("visible");
            }
            if (imageRef.current) {
              setTimeout(() => {
                imageRef.current?.classList.add("visible");
              }, 150); // Slight delay for image
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Alternate layout: even items have image on left
  const isImageLeft = index % 2 === 1;

  return (
    <article
      ref={itemRef}
      className="menu-item-card"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isImageLeft ? 'lg:flex-row-reverse' : ''}`}>
        {/* Text content */}
        <div
          ref={textRef}
          className={`text-slide space-y-5 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {/* Item name */}
          <h3 className="item-title">{displayName}</h3>

          {/* Description */}
          {displayDescription && (
            <p className="item-description max-w-lg">
              {displayDescription}
            </p>
          )}

          {/* Price - Puffy style */}
          <div className="flex items-baseline gap-1 pt-3">
            <span className="price-currency">
              aed
            </span>
            <span className="price-display">
              {item.price.toFixed(0)}
            </span>
          </div>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className={`image-reveal flex justify-center ${isImageLeft ? 'lg:order-1 lg:justify-start' : 'lg:order-2 lg:justify-end'}`}
        >
          <div className="image-card w-full max-w-sm lg:max-w-md aspect-square hover-lift">
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover parallax-image"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                <ImageIcon className="w-20 h-20 text-muted-foreground/20" />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MenuItem;
