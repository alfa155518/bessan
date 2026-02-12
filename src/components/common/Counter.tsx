import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface CounterProps {
    value: number;
    duration?: number;
}

export default function Counter({ value, duration = 2 }: CounterProps) {
    const count = useMotionValue(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(count, value, {
                duration: duration,
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.round(latest).toLocaleString();
                    }
                },
            });
            return () => controls.stop();
        }
    }, [inView, value, duration, count]);

    return <strong ref={ref}>0</strong>;
}
