import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Star, ShieldCheck, ThumbsUp } from "lucide-react";

interface TrustItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const trustData: TrustItem[] = [
  {
    id: "years",
    value: 15,
    suffix: "+",
    label: "Jahre Erfahrung",
    icon: <Award className="h-7 w-7" strokeWidth={1.5} />,
    description: "Seit 2009 am Wiener Markt",
  },
  {
    id: "projects",
    value: 500,
    suffix: "+",
    label: "Projekte realisiert",
    icon: <Briefcase className="h-7 w-7" strokeWidth={1.5} />,
    description: "Von Neubau bis Renovierung",
  },
  {
    id: "rating",
    value: 4.9,
    suffix: "/5",
    label: "Bewertungen",
    icon: <Star className="h-7 w-7" strokeWidth={1.5} />,
    description: "200+ zufriedene Kunden",
  },
  {
    id: "certified",
    value: 100,
    suffix: "%",
    label: "Zertifiziert",
    icon: <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />,
    description: "Höchste Qualitätsstandards",
  },
  {
    id: "response",
    value: 20,
    suffix: "min",
    label: "Reaktionszeit",
    icon: <ThumbsUp className="h-7 w-7" strokeWidth={1.5} />,
    description: "Schnellste Einsatzbereitschaft",
  },
];

const AnimatedCounter = ({ item }: { item: TrustItem }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = item.value / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          setCount(item.value);
          clearInterval(timer);
          return;
        }
        setCount(current);
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, item.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group flex flex-col items-center gap-3 rounded-xl border border-platinum/5 bg-space-light/30 p-8 backdrop-blur-sm transition-all hover:border-brass/20 hover:bg-space-light/50 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]"
    >
      {/* Icon with Glow */}
      <div className="rounded-full bg-brass/10 p-3 text-brass transition-all group-hover:bg-brass/20 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]">
        {item.icon}
      </div>

      {/* Counter */}
      <div className="flex items-baseline gap-0.5">
        <span className="text-4xl font-bold text-white sm:text-5xl">
          {typeof item.value === "number" && item.value % 1 === 0
            ? Math.round(count)
            : count.toFixed(1)}
        </span>
        <span className="text-3xl font-bold text-brass sm:text-4xl">
          {item.suffix}
        </span>
      </div>

      {/* Label */}
      <span className="text-sm font-semibold uppercase tracking-widest text-white">
        {item.label}
      </span>

      {/* Description */}
      <span className="text-xs text-platinum/40">{item.description}</span>
    </motion.div>
  );
};

const TrustBar = () => {
  return (
    <section className="relative border-b border-platinum/5 bg-space py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-brass/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brass/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-brass/70">
            Vertrauen & Qualität
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Zahlen die <span className="text-brass">überzeugen</span>
          </h2>
          <p className="mt-2 text-sm text-platinum/40">
            Warum über 500 Kunden auf B.O INSTALLATIONEN vertrauen
          </p>
        </motion.div>

        {/* Trust Grid - 5 Columns */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustData.map((item) => (
            <AnimatedCounter key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Divider with Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 bg-platinum/10" />
          <span className="text-xs uppercase tracking-widest text-platinum/20">
            Geprüfte Qualität
          </span>
          <span className="h-px w-12 bg-platinum/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
