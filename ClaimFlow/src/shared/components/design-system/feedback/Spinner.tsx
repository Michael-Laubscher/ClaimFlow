import { motion } from "framer-motion";

type SpinnerProps = {
  size?: number;
  label?: string;
};

export default function Spinner({ size = 72, label = "Loading..." }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: size,
          height: size,
        }}
      >
        {/* Ambient glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size * 1.4,
            height: size * 1.4,
            background: "radial-gradient(circle, rgba(35,60,123,0.28) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Rotating gradient ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            background: "conic-gradient(from 0deg, transparent, #233C7B, #5D7FEF, transparent)",
            maskImage: "radial-gradient(circle, transparent 58%, black 60%)",
            WebkitMaskImage: "radial-gradient(circle, transparent 58%, black 60%)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Glass center */}
        <motion.div
          className="rounded-full border border-white/10 backdrop-blur-xl"
          style={{
            width: size * 0.62,
            height: size * 0.62,
            background: "rgba(255,255,255,0.04)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.15), 0 8px 30px rgba(0,0,0,0.15)",
          }}
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Core */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size * 0.14,
            height: size * 0.14,
            background: "linear-gradient(135deg, #5D7FEF 0%, #233C7B 100%)",
            boxShadow: "0 0 24px rgba(93,127,239,0.6)",
          }}
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.p
        className="mt-6 text-xs uppercase tracking-[0.35em]"
        style={{
          color: "#233C7B",
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        {label}
      </motion.p>
    </div>
  );
}
