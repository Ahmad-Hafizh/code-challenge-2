import AboutSection, { AboutSectionBento, ValueType1 } from './home/AboutSection';
import FeatureProduct from './home/FeatureProduct';
import Hero from './home/Hero';

export default function Home() {
  return (
    <div className="container mx-auto px-[5%] md:px-10 flex flex-col gap-20">
      <Hero />
      <AboutSection />
      <AboutSectionBento />
      <FeatureProduct />
      <ValueType1 />
    </div>
  );
}
