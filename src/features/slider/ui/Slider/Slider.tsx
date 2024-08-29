import { useTheme } from "@/app/providers/ThemeProvider.js";
import React, { ReactElement, useRef } from "react";

import styles from "./styles.module.css";

interface Props {
  children: ReactElement;
  step?: number;
}

function Slider({ children, step = 100 }: Props) {
  const sliderRef = useRef<HTMLElement | null>(null);
  const { isDark } = useTheme();

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.slider}>
      <button
        onClick={scrollLeft}
        className={`${styles.arrow} ${isDark ? "dark" : "light"}`}
      >
        {"<"}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button
        onClick={scrollRight}
        className={`${styles.arrow} ${isDark ? "dark" : "light"}`}
      >
        {">"}
      </button>
    </div>
  );
}

export default Slider;
