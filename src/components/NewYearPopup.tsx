import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface NewYearPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewYearPopup = ({ isOpen, onClose }: NewYearPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Card */}
          <motion.div
            className="relative popup-gradient rounded-3xl p-8 md:p-12 shadow-romantic max-w-sm w-full text-center border border-primary/10"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Decorative hearts */}
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Happy New Year
            </h2>
            <p className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
              2026
            </p>
            <p className="text-2xl mb-8">❤️</p>

            <motion.button
              onClick={onClose}
              className="px-8 py-3 rounded-full button-yes-gradient text-primary-foreground font-body font-semibold shadow-romantic hover:shadow-glow-romantic transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter
            </motion.button>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 text-xl opacity-60">✨</div>
            <div className="absolute top-4 right-4 text-xl opacity-60">✨</div>
            <div className="absolute bottom-4 left-4 text-xl opacity-60">💕</div>
            <div className="absolute bottom-4 right-4 text-xl opacity-60">💕</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewYearPopup;
