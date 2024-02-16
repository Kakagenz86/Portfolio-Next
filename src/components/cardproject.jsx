'use client'

import img1 from '../assets/image/img1.png'
import img2 from '../assets/image/img2.png'
import img3 from '../assets/image/img3.png'
import img4 from '../assets/image/img4.png'
import img5 from '../assets/image/img5.png'
import img6 from '../assets/image/img6.png'
import img7 from '../assets/image/img7.png'
import img8 from '../assets/image/img8.png'
import img9 from '../assets/image/img9.png'
import img10 from '../assets/image/img10.png'
import img11 from '../assets/image/img11.png'
import './style.css'
import Image from 'next/image'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, useState } from "react";

const CardProject = () => {
    const [animationDuration, setAnimationDuration] = useState(0);

    useEffect(() => {
        const durations = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        setAnimationDuration(durations);
        Aos.init({
            once: false,
            easing: 'ease',
        });
    }, []);

    const projectMe = [{
        title: 'CRUD',
        image: img1,
        description: 'CRUD in React JS with API sudah ada register dan Login',
        alt: 'CRUD IMAGE',
        link: 'https://crud-reactapi.vercel.app/'
    },
    {
        title: 'Car Rental',
        image: img2,
        description: 'challenge platinum dari saya mengikuti bootcamp, ini versi lengkap dari challenge gold',
        alt: 'car rental',
        link: 'http://loave.tech/'
    },
    {
        title: 'Company Profile',
        image: img3,
        description: 'company profile utama medical dengan react js dan bootstrap',
        alt: 'company profile Utama Medical',
        link: 'https://utama-medical.vercel.app/'
    },
    {
        title: 'Wedding Web',
        image: img4,
        description: 'wedding web yang saya pelajari dari WPU',
        alt: 'web wedding image',
        link: 'https://wedding-web-five.vercel.app/'
    },
    {
        title: 'Car Rental Landing Page',
        image: img5,
        description: 'challenge gold dari saya mengikuti bootcamp, membuat landing page',
        alt: 'car rental image',
        link: 'https://car-rental-gilt-eight.vercel.app/'
    },
    {
        title: 'Portfolio reactjs',
        image: img6,
        description: 'portfolio menggunakan reactjs dan bootstrap',
        alt: 'portfolio react image',
        link: 'https://kakaportfolio-react.vercel.app/'
    },
    {
        title: 'Shop Affiliate',
        image: img7,
        description: 'mini shop pembelajaran untuk affiliate menggunakan tailwind',
        alt: 'shop affiliate image',
        link: 'https://kandaaaff.vercel.app/'
    },
    {
        title: 'Box Model',
        image: img8,
        description: 'ini pembuatan box model saat saya baru awal belajar front end di WPU',
        alt: 'box-model image',
        link: 'https://boxmodel-cyan.vercel.app/'
    },
    {
        title: 'Mini Web Film',
        image: img9,
        description: 'ini mini web film saya menggunakan react js',
        alt: 'web film image',
        link: 'https://genz-film.vercel.app/'
    },
    {
        title: 'Mini Ecommerce',
        image: img10,
        description: 'ini saya belajar membuat mini ecommerce dengan tailwind di cuy university',
        alt: 'mini ecommerce',
        link: 'https://onlineshoes.vercel.app/'
    },
    {
        title: 'Portfolio HTML CSS',
        image: img11,
        description: 'portfolio pertama saya menggunakan html css',
        alt: ' portfolio image ',
        link: 'https://miniport.vercel.app/'
    },]
    return (
        <div className='lg:grid lg:grid-cols-4 gap-10 m-auto'>
            {projectMe.map((data, index) => (
                    <div key={index}  className="w-72 xs:mt-10 rounded overflow-hidden shadow-lg" data-aos="flip-left" data-aos-easing="linear" data-aos-duration={animationDuration[index]}>
                        <Image className="w-full h-44" src={data.image} alt={data.alt} />
                        <div className='bg-white p-5'>
                            <h1 className="font-bold text-xl">{data.title}</h1>
                            <p className="text-gray-500 text-sm">{data.description}</p>
                            <a target='_blank' className="inline-block bg-gray-200 mt-5 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2" href={data.link}>Lihat Sekarang</a>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default CardProject;