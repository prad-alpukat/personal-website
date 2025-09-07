"use client";

import { MagicCard } from "@/components/ui/magic-card";
import IllustrationIcons from "./icons/IllustrationsIcon";
import DesignerIcon from "./icons/DesignerIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ServicesHighlight() {
  const [mousePosition, setMousePosition] = useState({ x: 10, y: 10 });
  const [mousePosition2, setMousePosition2] = useState({ x: 20, y: 20 });
  const cardRef = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - 36; // Subtract half of circle width (72px / 2)
        const y = e.clientY - rect.top - 36; // Subtract half of circle height (72px / 2)

        // Constrain within card boundaries
        const maxX = rect.width - 72;
        const maxY = rect.height - 72;

        setMousePosition({
          x: Math.max(0, Math.min(x, maxX)),
          y: Math.max(0, Math.min(y, maxY)),
        });
      }
    };

    const handleMouseLeave = () => {
      // Reset to default position
      setMousePosition({ x: 10, y: 10 });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove2 = (e: MouseEvent) => {
      if (cardRef2.current) {
        const rect = cardRef2.current.getBoundingClientRect();
        const x = e.clientX - rect.left - 36;
        const y = e.clientY - rect.top - 36;

        const maxX = rect.width - 72;
        const maxY = rect.height - 72;

        setMousePosition2({
          x: Math.max(0, Math.min(x, maxX)),
          y: Math.max(0, Math.min(y, maxY)),
        });
      }
    };

    const handleMouseLeave2 = () => {
      setMousePosition2({ x: 20, y: 20 });
    };

    const card2 = cardRef2.current;
    if (card2) {
      card2.addEventListener("mousemove", handleMouseMove2);
      card2.addEventListener("mouseleave", handleMouseLeave2);
    }

    return () => {
      if (card2) {
        card2.removeEventListener("mousemove", handleMouseMove2);
        card2.removeEventListener("mouseleave", handleMouseLeave2);
      }
    };
  }, []);
  return (
    <motion.section
      className="container max-w-screen-lg pt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-neutral-700 dark:text-neutral-200">
          Services
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          These services are what I can provide
        </p>
      </div>
      <motion.div
        className={
          "flex h-[500px] w-full flex-col gap-4 md:h-[250px] md:flex-row"
        }
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex-1"
        >
          <MagicCard
            className="flex-col items-center flex relative justify-center text-xl px-10 text-center gap-3 text-neutral-700 overflow-hidden h-full"
            gradientColor={"#ffffff25"}
          >
            <div ref={cardRef} className="relative w-36 mx-auto">
              <div
                className={`absolute h-1/2 aspect-square bg-white rounded-full overflow-hidden transition-all duration-300 ease-out z-10`}
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                }}
              >
                <IllustrationIcons
                  className="mx-auto w-36 z-10 text-neutral-800 absolute transition-all duration-300"
                  style={{
                    left: `${-mousePosition.x}px`,
                    top: `${-mousePosition.y}px`,
                  }}
                />
              </div>
              <IllustrationIcons className="w-full opacity-50" />
            </div>
            <p className="text-white">Website Development</p>
          </MagicCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex-1"
        >
          <MagicCard
            className="relative flex-col items-center justify-center text-xl px-10 text-center gap-3 text-neutral-700 dark:text-neutral-500 overflow-hidden h-full"
            gradientColor={"#ffffff25"}
          >
            <div ref={cardRef2} className="relative w-36 mx-auto">
              <div
                className={`absolute h-1/2 aspect-square bg-white rounded-full overflow-hidden z-20 transition-all duration-300 ease-out`}
                style={{
                  left: `${mousePosition2.x}px`,
                  top: `${mousePosition2.y}px`,
                }}
              >
                <DesignerIcon
                  className="mx-auto w-36 z-10 text-neutral-800 absolute transition-all duration-300"
                  style={{
                    left: `${-mousePosition2.x}px`,
                    top: `${-mousePosition2.y}px`,
                  }}
                />
              </div>
              <DesignerIcon className="w-full opacity-50" />
            </div>
            <p className="text-white">UI UX Design</p>
          </MagicCard>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
