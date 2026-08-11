"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given element ids is the "current" section: the last
 * one whose top has scrolled past `offset`. This mirrors how a reader
 * experiences long pages (a section stays active until the next one
 * begins), unlike a pure isIntersecting check which goes blank between
 * short anchor points.
 */
export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveId(current ?? ids[0] ?? null);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), offset]);

  return activeId;
}
