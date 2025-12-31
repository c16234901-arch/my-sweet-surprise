import { motion } from "framer-motion";
import { useState, useCallback, useRef } from "react";
import { Heart } from "lucide-react";
import ConfessionPopup from "./ConfessionPopup";
import HeartfeltMessagePopup from "./HeartfeltMessagePopup";

const LoveQuestion = () => {
  const [stage, setStage] = useState<"initial" | "message" | "final" | "confession">("initial");
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoClick = useCallback(() => {
    if (stage === "initial") {
      // Show the heartfelt message
      setStage("message");
    } else if (stage === "final") {
      // Make button escape
      if (!containerRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const buttonWidth = 100;
      const buttonHeight = 50;
      const padding = 20;

      const maxX = container.width - buttonWidth - padding * 2;
      const maxY = 200;

      const randomX = padding + Math.random() * maxX - container.width / 2 + buttonWidth;
      const randomY = padding + Math.random() * maxY;

      setNoButtonPosition({ x: randomX, y: randomY });
      setEscapeCount((prev) => prev + 1);
    }
  }, [stage]);

  const handleYesClick = () => {
    setStage("confession");
  };

  const handleMessageClose = () => {
    setStage("final");
  };

  const getNoButtonMessage = () => {
    if (escapeCount === 0) return "No";
    if (escapeCount < 3) return "No 😅";
    if (escapeCount < 5) return "Can't catch me!";
    if (escapeCount < 8) return "Try harder! 😜";
    return "Just say yes! 💕";
  };

  const currentQuestion = stage === "initial" 
    ? "Do you like me?" 
    : "Would you let me be in your life?";

  const subtitle = stage === "initial"
    ? "Be honest... ❤️"
    : "Please... 🥺";

  return (
    <>
      <div
        ref={containerRef}
        className="min-h-[60vh] flex flex-col items-center justify-center px-6 relative"
      >
        {/* Question */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          key={stage}
        >
          <motion.div
            className="mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-12 h-12 text-primary fill-primary mx-auto drop-shadow-lg" />
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            {currentQuestion}
          </h2>

          <motion.p
            className="text-muted-foreground font-body mt-4 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Buttons Container */}
        {stage !== "confession" && stage !== "message" && (
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 relative w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Yes Button */}
            <motion.button
              onClick={handleYesClick}
              className="px-12 py-4 rounded-full button-yes-gradient text-primary-foreground font-body font-bold text-xl shadow-romantic hover:shadow-glow-romantic transition-all duration-300 min-w-[140px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Yes ❤️
            </motion.button>

            {/* No Button - Escaping only in final stage */}
            <motion.button
              onClick={handleNoClick}
              onMouseEnter={stage === "final" ? handleNoClick : undefined}
              onTouchStart={stage === "final" ? handleNoClick : undefined}
              className="px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-body font-semibold text-lg border-2 border-primary/20 hover:border-primary/40 transition-colors min-w-[120px]"
              animate={stage === "final" ? {
                x: noButtonPosition.x,
                y: noButtonPosition.y,
              } : {}}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {stage === "final" ? getNoButtonMessage() : "No"}
            </motion.button>
          </motion.div>
        )}

        {/* Hint text after multiple escapes */}
        {stage === "final" && escapeCount >= 5 && (
          <motion.p
            className="text-sm text-muted-foreground mt-8 font-body italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            The No button really wants you to say yes... 😉
          </motion.p>
        )}
      </div>

      {/* Heartfelt Message Popup */}
      <HeartfeltMessagePopup
        isOpen={stage === "message"}
        onClose={handleMessageClose}
      />

      {/* Final Confession Popup */}
      <ConfessionPopup
        isOpen={stage === "confession"}
        onClose={() => {}}
      />
    </>
  );
};

export default LoveQuestion;
