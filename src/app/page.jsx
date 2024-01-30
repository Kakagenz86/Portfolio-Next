import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
          <Navbar />
      <div className='bg-gray-200 h-screen'>
          <Hero />
      </div>
      <div className='bg-gray-200 h-screen'>
          <AboutMe/>
      </div>
      <div className='bg-gray-200 h-screen'>
        <Skills/>
      </div>
      <div className='bg-gray-200 h-full'>
        <Project/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;