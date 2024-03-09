import React from 'react'
import './style.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <div id='contact' className='flex flex-col justify-center h-full pt-20 bg-gray-200'>
            <div className="flex flex-col items-center h-3/4">
                <div className="text-center flex flex-col">
                        <h1 className='text-5xl title-contact'>Hubungi Saya</h1>
                        <div className='line-title-contact'></div>
                </div>
            </div>
            <div className='m-auto gap-5 flex flex-col py-10'>
                <a className='md:w-44 md:h-20 w-32 h-12 rounded bg-green-500 flex justify-center items-center' href="mailto:muhamadkakahardiansyah@gmail.com">
                    <FontAwesomeIcon className="md:text-5xl text-2xly" icon={faEnvelope} />
                </a>
                <a className='md:w-44 md:h-20 w-32 h-12 rounded bg-green-500 flex justify-center items-center' href="https://wa.me/+6285157718328">
                    <FontAwesomeIcon className="md:text-5xl text-2xly" icon={faWhatsapp} />
                </a>
            </div>
        </div>
    );
}

export default Contact;