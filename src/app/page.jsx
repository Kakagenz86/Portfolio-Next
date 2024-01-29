import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import Project from "@/components/project";

const Home = () => {
  return (
    <div>
      <div className='bg-gray-200 h-screen'>
          <Navbar />
          <Hero />
      </div>
      <div className='bg-gray-200 h-screen'>
          <AboutMe/>
      </div>
      <div className='bg-gray-200 h-screen'>
        <Skills/>
      </div>
      <div className='bg-gray-200 h-screen'>
        <Project/>
      </div>
      {/* <div>
          <footer>
              <p className='text-center'>Copyright © 2023 Muhamad Kaka Hardiansyah. All rights reserved.</p>
          </footer>
      </div> */}
    </div>
  );
}

export default Home;