"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <a href="#" className="logo">
        <span className="logo-dot" /> Four Beers Down
      </a>
      <div className="nav-links">
        <a href="#how">How It Works</a>
        <a href="#try">Try a Card</a>
        <a href="#reviews">Reviews</a>
        <a href="#buy" className="btn-buy">
          Buy Now &rarr;
        </a>
      </div>
    </nav>
  );
}
