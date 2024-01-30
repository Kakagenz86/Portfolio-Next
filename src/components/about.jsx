'use client'

import { useEffect } from 'react';
import { faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import 'aos/dist/aos.css';
import Aos from 'aos';

const AboutMe = () => {
    useEffect(() => {
        Aos.init({
            once: false,
            easing: 'ease',
        });
    }, []);
    return ( 
            <div className="about" id='about'>
                    <div className="flex flex-col lg:flex-row justify-evenly">
                        <div className="lg:w-2/5 p-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                            <h1 className='title-about lg:text-5xl xs:text-2xl'>Tentang Saya</h1>
                            <p className='desc-about lg:text-xl'>Halo. Perkenalkan Nama lengkap saya adalah Muhamad Kaka Hardiansyah, saya fresh gradute SMA jurusan IPA, Sebagai lulusan SMA yang bersemangat, saya telah mengasah keterampilan saya dalam pengembangan front end dengan belajar otodidak dan mengikuti salah satu program bootcamp Front End dari Binar Academy. Saya berdedikasi di dunia pengembangan front end dengan semangat belajar yang tinggi, dan berusaha untuk menciptakan pengalaman pengguna yang menarik dan mudah digunakan. Saya telah mendalami HTML, CSS, JavaScript dan juga belajar menggunakan library ReactJS.</p>
                        </div>
                        <div className="lg:w-1/3 p-10" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                            <h1 className='title-about lg:text-5xl xs:text-2xl'>Mari Berteman</h1>
                            <p className='desc-about lg:text-xl'>Mari Berteman untuk sharing pengalaman tentang dunia programer dan menambah relasi</p>
                            <div className='flex gap-4 mt-3'>
                                <a className='about-sosmed' href='https://www.instagram.com/kakaa_genzz/'>
                                    <FontAwesomeIcon className='lg:text-3xl xs:text-2xl' icon={faInstagram} />
                                </a>
                                <a className='about-sosmed' href='https://github.com/Kakagenz86'>
                                    <FontAwesomeIcon className='lg:text-3xl xs:text-2xl' icon={faGithub} />
                                </a>
                                <a className='about-sosmed' href='https://www.linkedin.com/in/muhamad-kaka-hardiansyah-08535727a/'>
                                    <FontAwesomeIcon className='lg:text-3xl xs:text-2xl' icon={faLinkedin} />
                                </a>
                                <a className='about-sosmed' href='https://www.youtube.com/channel/UCTBlZDK-nyFWzY1t2Auixlw'>
                                    <FontAwesomeIcon className='lg:text-3xl xs:text-2xl' icon={faYoutube} />
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
    );
}

export default AboutMe;