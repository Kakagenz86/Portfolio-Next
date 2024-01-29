import Image from 'next/image';
import me from '../assets/image/me.jpeg'
import './style.css'
import Typewriter from './typewritter';

const Hero = () => {
    return (
        <main className='flex flex-col justify-around h-full items-center lg:flex-row'>
            <div className="text-center lg:text-left lg:flex lg:flex-col lg:justify-center lg:relative xs:flex xs:flex-col xs:justify-center xs:relative w-2/4 h-72">
                <div className='flex flex-col lg:items-start xs:items-center'>
                    <Typewriter text='KAKA HARDIANSYAH' delay={100} />
                    <div className='bg-amber-400 h-2 w-2/3'></div>
                </div>
                <p className='title-hero lg:text-5xl'>FRONT-END</p>
                <p className='title-hero lg:text-5xl'>WEB DEVELOPER</p>
            </div>
            <figure className='lg:relative lg:top-0 xs:relative xs:bottom-28'>
                <Image className='hero-img' src={me} alt="img1" />
            </figure>
        </main>
    );
}

export default Hero;