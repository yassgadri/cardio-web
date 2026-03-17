import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  breadcrumb?: { label: string; href?: string }[];
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => (
  <div className="page-banner">
    <div className="container-main relative z-10 text-center">
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      {breadcrumb && (
        <motion.nav
          className="mt-4 flex items-center justify-center gap-2 text-sm text-primary-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="opacity-50">›</span>}
              {item.href ? (
                <Link to={item.href} className="hover:text-primary-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary-foreground">{item.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
      )}
    </div>
  </div>
);

export default PageBanner;
