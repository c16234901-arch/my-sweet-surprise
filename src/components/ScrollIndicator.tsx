import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <Heart className="w-4 h-4 text-primary/60 fill-primary/60 mb-1" />
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </motion.div>
      <p className="text-xs text-muted-foreground font-body">Scroll down</p>
    </motion.div>
  );
};

export default ScrollIndicator;
