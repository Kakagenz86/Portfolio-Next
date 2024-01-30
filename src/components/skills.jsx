'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faGithub} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import next from '@/assets/image/next.png'
import tailwind from '@/assets/image/tailwind.png'
import restapi from '@/assets/image/restapi.png'
import './style.css'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";

const Skills = () => {
    useEffect(() => {
        Aos.init({
            once: false,
            easing: 'ease',
        });
    }, []);
    return (
        <section id="skills" className="lg:flex lg:flex-col xs:flex xs:flex-col">
            <div className="flex flex-col items-center mb-10">
                <h1 className="title-skills text-5xl font-medium">SKILLS</h1>
                <div className="line-title-skills"></div>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:m-auto lg:gap-32 xs:grid xs:grid-cols-3 xs:m-auto bg xs:gap-10">
                    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="100">
                        <FontAwesomeIcon className="lg:text-7xl xs:text-5xl img-skills" icon={faHtml5} />
                        <p>HTML5</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="200">
                        <FontAwesomeIcon className="lg:text-7xl xs:text-5xl img-skills" icon={faCss3} />
                        <p>CSS3</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="300">
                        <FontAwesomeIcon className="lg:text-7xl xs:text-5xl img-skills" icon={faJs} />
                        <p>JS</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="400">
                        <FontAwesomeIcon className="lg:text-7xl xs:text-5xl img-skills" icon={faReact} />
                        <p>React</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
                        <FontAwesomeIcon className="lg:text-7xl xs:text-5xl img-skills" icon={faBootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <figure data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600">
                        <Image src={next} className="img-skills lg:w-16 xs:w-12" alt="nextjs" />
                        <figcaption>Next</figcaption>
                    </figure>
                    <figure data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="700">
                        <Image src={tailwind} className="img-skills lg:w-16 xs:w-12" alt="tailwind" />
                        <figcaption>Tailwind</figcaption>
                    </figure>
                    <figure data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800">
                        <Image src={restapi} className="img-skills lg:w-16 xs:w-12" alt="restapi" />
                        <figcaption>Rest API</figcaption>
                    </figure>
                    <div data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="900">
                        <FontAwesomeIcon className="lg:text-7xl xs:text-5xl img-skills" icon={faGithub} />
                        <p>Github</p>
                    </div>
            </div>
        </section>
    );
}

export default Skills;