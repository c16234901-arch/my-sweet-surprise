import { motion } from "framer-motion";
import { useMemo } from "react";

const FallingPetals = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 8,
      size: 14 + Math.random() * 16,
      opacity: 0.4 + Math.random() * 0.4,
      rotateStart: Math.random() * 360,
      swayAmount: 30 + Math.random() * 50,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
          }}
          initial={{ 
            y: "-10vh", 
            rotate: petal.rotateStart,
            x: 0 
          }}
          animate={{
            y: "110vh",
            rotate: [petal.rotateStart, petal.rotateStart + 180, petal.rotateStart + 360],
            x: [0, petal.swayAmount, -petal.swayAmount, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: petal.duration / 4,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default FallingPetals;
