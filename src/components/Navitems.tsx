"use client";

import { useState, useRef, useEffect } from "react";
import { PRODUCT_CATEGORIES } from "../config";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

function Navitems() {
  const [active, setActive] = useState<null | number>(null);

  const isAnyOpen = active !== null;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => {
    setActive(null);
  });

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handelOpen = () => {
          if (active === index) {
            setActive(null);
          } else {
            setActive(index);
          }
        };

        const isOpen = active === index;

        return (
          <NavItem
            category={category}
            isOpen={isOpen}
            handleOpen={handelOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
            close={handelOpen}
          />
        );
      })}
    </div>
  );
}

export default Navitems;
