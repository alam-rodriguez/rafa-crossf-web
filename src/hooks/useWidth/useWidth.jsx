import { useEffect, useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(() => {
    // Esto se asegura de que el estado inicial se configure correctamente en el lado del cliente
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1500; // Valor predeterminado para el lado del servidor
  });

  useEffect(() => {
    // Solo se ejecuta en el lado del cliente
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { width };
};

export default useWidth;
