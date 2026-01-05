import { useState, useEffect, useRef, useCallback } from "react";
import MenuHeader from "@/components/menu/MenuHeader";
import CategoryTabs from "@/components/menu/CategoryTabs";
import MenuSection from "@/components/menu/MenuSection";
import MenuFooter from "@/components/menu/MenuFooter";
import ScrollToTop from "@/components/menu/ScrollToTop";
import { menuCategories } from "@/data/menuData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const isScrollingRef = useRef(false);

  // Handle category click - smooth scroll to section
  const handleCategoryChange = useCallback((categoryId: string) => {
    isScrollingRef.current = true;
    setActiveCategory(categoryId);

    if (categoryId === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
      return;
    }

    const section = document.querySelector(`[data-category-id="${categoryId}"]`);
    if (section) {
      const headerOffset = 100; // Account for sticky header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  }, []);

  // Scroll detection to update active category using IntersectionObserver
  useEffect(() => {
    const sections = menuCategories.map((category) => ({
      id: category.id,
      element: document.querySelector(`[data-category-id="${category.id}"]`),
    })).filter((s) => s.element !== null);

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -75% 0px",
      threshold: [0, 0.1, 0.5, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      // Check scroll position - if near top, set to "all"
      if (window.scrollY < 200) {
        setActiveCategory("all");
        return;
      }

      // Find the section that's most visible in the upper portion
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting && entry.intersectionRatio > 0.1)
        .sort((a, b) => {
          const aTop = a.boundingClientRect.top;
          const bTop = b.boundingClientRect.top;
          return aTop - bTop;
        });

      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries[0];
        const categoryId = topEntry.target.getAttribute("data-category-id");
        if (categoryId) {
          setActiveCategory(categoryId);
        }
      } else {
        // Fallback: find section closest to top of viewport
        let closestSection = sections[0];
        let minDistance = Infinity;

        sections.forEach(({ id, element }) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - 100);

            if (rect.top <= 150 && rect.bottom > 0 && distance < minDistance) {
              minDistance = distance;
              closestSection = { id, element };
            }
          }
        });

        if (minDistance < Infinity) {
          setActiveCategory(closestSection.id);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ element }) => {
      if (element) {
        observer.observe(element);
      }
    });

    // Also handle scroll for "all" detection
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      if (window.scrollY < 200) {
        setActiveCategory("all");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <MenuHeader />

        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <main className="pb-8">
          {/* Show all categories */}
          {menuCategories.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
              showTitle={true}
            />
          ))}
        </main>

        <MenuFooter />
      </div>

      {/* Floating scroll to top button - Puffy style */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
