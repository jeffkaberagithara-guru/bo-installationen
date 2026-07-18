import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { trustData, type TrustItem } from "@/data/trustBar";

const AnimatedCounter = ({
  value,
  suffix,
  label,
  icon: IconName,
}: TrustItem) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const step = Math.max(1, Math.floor(value / 60));
      const increment = () => {
        start += step;
        if (start >= value) {
          setCount(value);
          return;
        }
        setCount(start);
        requestAnimationFrame(increment);
      };
      increment();
    }
  }, [isInView, value]);

  const IconComponent = Icons[IconName as keyof typeof Icons];

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      {IconComponent && (
        <IconComponent className="h-8 w-8 text-brass" strokeWidth={1.5} />
      )}
      <div className="flex items-baseline gap-0.5">
        <span className="text-3xl font-bold text-white sm:text-4xl">
          {typeof value === "number" && value % 1 === 0
            ? count
            : count.toFixed(1)}
        </span>
        <span className="text-2xl font-bold text-brass sm:text-3xl">
          {suffix}
        </span>
      </div>
      <span className="text-xs uppercase tracking-widest text-platinum/50">
        {label}
      </span>
    </div>
  );
};

const TrustBar = () => {
  return (
    <section className="border-b border-platinum/5 bg-space-light/50 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {trustData.map((item) => (
            <AnimatedCounter key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;