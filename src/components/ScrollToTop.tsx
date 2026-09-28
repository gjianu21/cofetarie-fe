// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// La schimbarea paginii (pathname), revine sus. Filtrul de categorii de pe main
// schimbă doar query string-ul (?categorie=...), deci nu declanșează scroll-ul în sus
// și scrollIntoView din HomePage continuă să funcționeze.
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}