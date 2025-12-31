import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface HeartfeltMessagePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeartfeltMessagePopup = ({ isOpen, onClose }: HeartfeltMessagePopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup Card */}
          <motion.div
            className="relative popup-gradient rounded-3xl p-6 md:p-8 shadow-romantic max-w-md w-full text-center border border-primary/10 max-h-[85vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Decorative heart */}
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </motion.div>

            <div className="mt-4 mb-6">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                Happy New Year 🫂
              </h3>
              <p className="font-display text-xl text-primary font-medium">
                Alishee 🫶🏼
              </p>
            </div>

            <div className="text-left font-body text-foreground/90 space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                I know things are really disturbing between us...
              </p>
              
              <p>
                But I really care for you. I wanna make things good but not from pressure.
              </p>
              
              <p>
                I don&apos;t know what you feel for me. I want to say this ki rather than giving some stranger a chance you should reconsider about us.
              </p>
              
              <p>
                I really hope ki j decision hunxa it will be better for you and sayad that will be your final decision. Ik maile dherai bakbak garisake 😅
              </p>
            </div>

            <motion.button
              onClick={onClose}
              className="mt-8 px-8 py-3 rounded-full button-yes-gradient text-primary-foreground font-body font-semibold shadow-romantic hover:shadow-glow-romantic transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue ❤️
            </motion.button>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 text-lg opacity-60">💕</div>
            <div className="absolute top-4 right-4 text-lg opacity-60">💕</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeartfeltMessagePopup;
