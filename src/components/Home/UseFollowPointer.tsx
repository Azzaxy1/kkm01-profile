import { RefObject, useEffect } from "react";
import { useMotionValue, useSpring, useAnimationFrame } from "framer-motion";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handlePointerMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
      xPoint.set(clientX - offsetLeft - offsetWidth / 2);
      yPoint.set(clientY - offsetTop - offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [ref, xPoint, yPoint]);

  useAnimationFrame(() => {});

  return { x, y };
}
