import Image from 'next/image';
import me from '../assets/image/me.jpeg'
import './style.css'
import Typewriter from './typewritter';

const Hero = () => {
    return (
        <main className='flex flex-col justify-around h-full items-center md:flex-row'>
            <div className="text-center md:gap-2 md:text-left md:flex md:flex-col md:justify-center md:relative flex flex-col justify-center relative w-2/4 h-72">
                <div className='flex flex-col md:items-start items-center'>
                    <Typewriter text='KAKA HARDIANSYAH' delay={100} />
                    <div className='bg-amber-400 md:h-2 h-1 md:w-2/3 w-3/4'></div>
                </div>
                <p className='title-hero md:text-5xl'>FRONT-END</p>
                <p className='title-hero md:text-5xl'>WEB DEVELOPER</p>
            </div>
            <figure className='md:relative md:top-0 relative bottom-28'>
                <Image className='hero-img' src={me} alt="img1" />
            </figure>
        </main>
    );
}

export default Hero;