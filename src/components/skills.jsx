'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import './style.css'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import NextJs from "@/assets/icon/nextjs";
import RestApi from "@/assets/icon/restapi";
import Tailwind from "@/assets/icon/tailwind";
import Redux from "@/assets/icon/redux";

const Skills = () => {
    useEffect(() => {
        Aos.init({
            once: false,
            easing: 'ease',
        });
    }, []);
    return (
        <section id="skills" className="md:flex md:flex-col flex flex-col">
            <div className="flex flex-col items-center mb-10">
                <h1 className="title-skills text-5xl font-medium">SKILLS</h1>
                <div className="line-title-skills"></div>
            </div>
            <div className="md:grid md:grid-cols-4 md:m-auto md:gap-32 grid grid-cols-3 m-auto bg gap-10">
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="100">
                        <FontAwesomeIcon className="md:text-7xl text-5xl img-skills" icon={faHtml5} />
                        <p>HTML5</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="200">
                        <FontAwesomeIcon className="md:text-7xl text-5xl img-skills" icon={faCss3} />
                        <p>CSS3</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300">
                        <FontAwesomeIcon className="md:text-7xl text-5xl img-skills" icon={faJs} />
                        <p>JS</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="400">
                        <FontAwesomeIcon className="md:text-7xl text-5xl img-skills" icon={faReact} />
                        <p>React</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
                        <FontAwesomeIcon className="md:text-7xl text-5xl img-skills" icon={faBootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600">
                        <FontAwesomeIcon className="md:text-7xl text-5xl img-skills" icon={faGithub} />
                        <p>Github</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="700">
                        <FontAwesomeIcon className="md:text-7xl text-5xl img-skills" icon={faMobileScreen}/>
                        <p>Responsive</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800">
                        <Redux />
                        <p>Redux</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="900">
                        <NextJs />
                        <p>Next</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                        <Tailwind />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1100">
                        <RestApi />
                        <p>Rest API</p>
                    </div>
            </div>
        </section>
    );
}

export default Skills;