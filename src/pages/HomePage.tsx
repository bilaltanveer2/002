import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import ServicesSnapshot from '../sections/ServicesSnapshot';
import ResultsStrip from '../sections/ResultsStrip';
import TestimonialsStrip from '../sections/TestimonialsStrip';
import LeadMagnet from '../sections/LeadMagnet';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <ServicesSnapshot />
      </motion.div>
      <ResultsStrip />
      <TestimonialsStrip />
      <LeadMagnet />
    </>
  );
};

export default HomePage;

