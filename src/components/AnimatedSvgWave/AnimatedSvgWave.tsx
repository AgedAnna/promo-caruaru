import { motion } from "framer-motion";

export default function AnimatedSvgWave() {
  return (
    <motion.svg
      viewBox="0 0 1440 100"
      style={{ width: "100vw", height: 100, display: "block" }}
      initial={{ x: 0 }}
      animate={{ x: [0, -50, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    >
      <path
        d="M0,50 Q80,0 160,50 T320,50 T480,50 T640,50 T800,50 T960,50 T1120,50 T1280,50 T1440,50 V100 H0Z"
        fill="#FE5500"
        opacity="0.8"
      />
      <path
        d="M0,80 Q80,30 160,80 T320,80 T480,80 T640,80 T800,80 T960,80 T1120,80 T1280,80 T1440,80 V100 H0Z"
        fill="#FF7300"
        opacity="0.5"
      />
    </motion.svg>
  );
}
