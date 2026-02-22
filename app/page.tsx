import Hero from './components/Hero';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Cta from './components/Cta';

export const metadata = {
  title: "Best Python Training Institute in Chennai | ArivOn Academy",
  description:
    "Join ArivOn Academy to learn Python, DevOps, and React with real-time projects. 100% placement assistance.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Courses />
      <Stats />
      <Features />
      {/* <Testimonials /> */}
      {/* <Cta/>      */}
     
    </div>
  );
}