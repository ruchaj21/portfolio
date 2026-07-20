import { motion } from "framer-motion";
const FadeIn = ({ children, delay = 0, duration = 0.6, y = 30 }) => {
  const MotionDiv = motion.div;

  return (
    <MotionDiv
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionDiv>
  );
};

export default FadeIn;
