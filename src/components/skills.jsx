import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faBootstrap, faGithub} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import next from '@/assets/image/next.png'
import tailwind from '@/assets/image/tailwind.png'
import restapi from '@/assets/image/restapi.png'
import './style.css'

const Skills = () => {
    return (
        <section className="lg:flex lg:flex-col lg:pt-0 xs:flex xs:pt-60 xs:flex-col">
            <div className="flex flex-col items-center">
                <h1 className="title-skills text-5xl font-medium">SKILLS</h1>
                <div className="line-title-skills"></div>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:m-auto lg:gap-32 xs:grid xs:grid-cols-3 xs:m-auto xs:gap-20">
                    <div>
                        <FontAwesomeIcon className="text-7xl" icon={faHtml5} />
                        <p>HTML5</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-7xl" icon={faCss3} />
                        <p>CSS3</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-7xl" icon={faJs} />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-7xl" icon={faReact} />
                        <p>React</p>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-7xl" icon={faBootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <figure>
                        <Image src={next} width={66} className="img" alt="nextjs" />
                        <figcaption>Next</figcaption>
                    </figure>
                    <figure>
                        <Image src={tailwind} width={66} className="bg-white rounded-full" alt="tailwind" />
                        <figcaption>Tailwind</figcaption>
                    </figure>
                    <figure>
                        <Image src={restapi} width={66} alt="restapi" />
                        <figcaption>Rest API</figcaption>
                    </figure>
                    <div>
                        <FontAwesomeIcon className="text-7xl" icon={faGithub} />
                        <p>Github</p>
                    </div>
            </div>
        </section>
    );
}

export default Skills;