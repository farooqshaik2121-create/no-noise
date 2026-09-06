"use client";

import { motion } from "framer-motion";

export interface KaleidoTile {
  src: string;
  alt: string;
  /** Extra vertical emphasis for masonry rhythm */
  tall?: boolean;
}

interface KaleidoscopeGridProps {
  tiles: KaleidoTile[];
  className?: string;
}

/**
 * Staggered masonry "kaleidoscope" grid of moody photography.
 * Pure CSS columns — each tile keeps its natural aspect for a broken,
 * editorial rhythm.
 */
export function KaleidoscopeGrid({ tiles, className = "" }: KaleidoscopeGridProps) {
  return (
    <div className={`columns-2 gap-3 sm:columns-3 lg:columns-4 ${className}`}>
      {tiles.map((tile, i) => (
        <motion.figure
          key={tile.src + i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08 * (i % 8), ease: [0.16, 1, 0.3, 1] }}
          className={`mb-3 break-inside-avoid overflow-hidden rounded-xl border border-white/[0.05] ${
            tile.tall ? "md:mt-6" : ""
          }`}
        >
          <img
            src={tile.src}
            alt={tile.alt}
            loading="lazy"
            className="w-full object-cover opacity-80 transition-all duration-700 hover:opacity-100 hover:scale-[1.03]"
          />
        </motion.figure>
      ))}
    </div>
  );
}
