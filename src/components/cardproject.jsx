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
        image: img1,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'web wedding image',
        link: '#'
    },
    {
        image: img2,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'company profile Utama Medical',
        link: '#'
    },
    {
        image: img3,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'olshop image',
        link: '#'
    },
    {
        image: img4,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'mini portfolio image',
        link: '#'
    },
    {
        image: img5,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'car rental image',
        link: '#'
    },
    {
        image: img6,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'shop affiliate image',
        link: '#'
    },
    {
        image: img7,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'box-model image',
        link: '#'
    },
    {
        image: img8,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'react from binar image',
        link: '#'
    },
    {
        image: img9,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'web film image',
        link: '#'
    },
    {
        image: img10,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, magnam a! Iste laboriosam fugiat itaque mollitia odit, necessitatibus facilis ducimus.',
        alt: 'web film image',
        link: '#'
    }]
    return (
        <div className='lg:grid lg:grid-cols-4 gap-10 m-auto'>
            {projectMe.map((data, index) => (
                    <div key={index}  className="w-72 xs:mt-10 rounded overflow-hidden shadow-lg" data-aos="flip-left" data-aos-easing="linear" data-aos-duration={animationDuration[index]}>
                        <Image className="w-full h-44" src={data.image} alt={data.alt} />
                        <div className='bg-white p-5'>
                            <h1 className="font-bold text-xl">The Coldest Sunset</h1>
                            <p className="text-gray-500 text-sm">{data.description}</p>
                            <a className="inline-block bg-gray-200 mt-5 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2" href={data.link}>Lihat Sekarang</a>
                        </div>
                    </div>
            ))}
        </div>
    );
}

export default CardProject;