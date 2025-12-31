import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import FallingPetals from "@/components/FallingPetals";
import NewYearPopup from "@/components/NewYearPopup";
import LoveQuestion from "@/components/LoveQuestion";
import BackgroundMusic from "@/components/BackgroundMusic";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  const [showNewYearPopup, setShowNewYearPopup] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [hasInteracted]);

  return (
    <div className="min-h-[200vh] romantic-gradient overflow-x-hidden">
      {/* Floating Hearts & Falling Petals Background */}
      <FloatingHearts />
      <FallingPetals />

      {/* New Year Popup */}
      <NewYearPopup
        isOpen={showNewYearPopup}
        onClose={() => setShowNewYearPopup(false)}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Decorative sparkle */}
          <motion.div
            className="mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-gold mx-auto" />
          </motion.div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            A Special
          </h1>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary italic mb-8">
            Message for You
          </h2>

          {/* Heart decoration */}
          <motion.div
            className="flex justify-center gap-4 mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-primary/50 fill-primary/50" />
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <Heart className="w-6 h-6 text-primary/50 fill-primary/50" />
          </motion.div>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
            Every moment with you feels like a beautiful dream that I never want to wake up from...
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 text-4xl opacity-30 animate-float">💕</div>
        <div className="absolute top-40 right-10 text-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}>✨</div>
        <div className="absolute bottom-40 left-16 text-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }}>💗</div>
        <div className="absolute bottom-60 right-16 text-4xl opacity-30 animate-float" style={{ animationDelay: "0.5s" }}>💖</div>
      </section>

      {/* Love Question Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10">
        <LoveQuestion />
      </section>

      {/* Footer decoration */}
      <section className="py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-2xl">💕</p>
          <p className="font-body text-muted-foreground text-sm">
            Made with love, just for you
          </p>
        </motion.div>
      </section>

      {/* Background Music */}
      <BackgroundMusic hasInteracted={hasInteracted} />
    </div>
  );
};

export default Index;
