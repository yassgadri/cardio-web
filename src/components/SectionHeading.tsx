import { motion } from "framer-motion";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  centered?: boolean;
}

const SectionHeading = ({ overline, title, centered = true }: SectionHeadingProps) => (
  <motion.div
    className={`mb-10 md:mb-14 ${centered ? "text-center" : ""}`}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {overline && (
      <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">{overline}</p>
    )}
    <h2 className="text-2xl md:text-3xl lg:text-4xl">{title}</h2>
    {!centered && (
      <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
    )}
  </motion.div>
);

export default SectionHeading;
