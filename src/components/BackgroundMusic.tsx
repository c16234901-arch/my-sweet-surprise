import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

interface BackgroundMusicProps {
  hasInteracted: boolean;
}

const BackgroundMusic = ({ hasInteracted }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusicPrompt, setShowMusicPrompt] = useState(false);

  // Tu Jaane Na - Romantic Hindi song from Ajab Prem Ki Ghazab Kahani
  const musicUrl = "/audio/tu-jaane-na.mp3";

  useEffect(() => {
    if (hasInteracted && audioRef.current && !isPlaying) {
      setShowMusicPrompt(true);
    }
  }, [hasInteracted, isPlaying]);

  const startMusic = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.3;
        await audioRef.current.play();
        setIsPlaying(true);
        setShowMusicPrompt(false);
      } catch (error) {
        console.log("Audio autoplay prevented:", error);
      }
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setShowMusicPrompt(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />

      {/* Music prompt */}
      <AnimatePresence>
        {showMusicPrompt && (
          <motion.div
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <motion.button
              onClick={startMusic}
              className="flex items-center gap-3 px-6 py-3 rounded-full popup-gradient shadow-romantic border border-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music className="w-5 h-5 text-primary" />
              <span className="font-body text-foreground font-medium">
                Play Romantic Music 🎵
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music control button */}
      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full popup-gradient shadow-romantic border border-primary/20 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        )}
      </motion.button>
    </>
  );
};

export default BackgroundMusic;
