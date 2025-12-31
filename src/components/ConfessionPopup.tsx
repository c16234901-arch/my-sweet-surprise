import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface ConfessionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfessionPopup = ({ isOpen, onClose }: ConfessionPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with rose petals effect */}
          <motion.div
            className="absolute inset-0 bg-primary/30 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Floating celebration hearts and petals */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 1, 0.8],
                y: [0, -80],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                delay: i * 0.08,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "🌸" : "💕"}
            </motion.div>
          ))}

          {/* Popup Card */}
          <motion.div
            className="relative popup-gradient rounded-3xl p-10 md:p-14 shadow-glow-romantic max-w-sm w-full text-center border border-primary/20"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            {/* Animated heart at top */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-16 h-16 text-primary fill-primary drop-shadow-lg" />
            </motion.div>

            <div className="mt-4 mb-6">
              <Sparkles className="w-6 h-6 text-gold mx-auto mb-4" />
            </div>

            <motion.h2
              className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I Love You Forever
            </motion.h2>

            <motion.p
              className="font-display text-3xl md:text-4xl font-bold text-primary italic mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Alishee
            </motion.p>

            <motion.p
              className="text-5xl mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              ❤️🌸❤️
            </motion.p>

            <motion.p
              className="font-body text-muted-foreground text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Thank you for being in my life 💕
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfessionPopup;
