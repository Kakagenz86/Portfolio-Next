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
                    <p className='font-bold'>Isi form dibawah ini untuk menghubungi saya</p>
                </div>
                <form className="flex justify-center w-96 h-4/5 mt-5" method='POST' action='https://script.google.com/macros/s/AKfycbxP8rdIZKpyOVGKRY3hErmey058ri5uCOXLeIlpjJ9fq7sJy_SBGTue5VjixR3o77gk/exec' id='my-form'>
                    <div className=" flex flex-col">
                        <div className="mb-6">
                            <input className='bg-slate-900 h-8 w-80 rounded p-5 text-white' type="text" id="nama" name="nama" placeholder='Nama'/>
                        </div>
                        <div className="mb-6">
                            <input className='bg-slate-900 h-8 w-80 rounded p-5 text-white' type="email" id="email" name="email" placeholder='Alamat Email'/>
                        </div>
                        <div className="mb-6">
                            <input className='bg-slate-900 h-8 w-80 rounded p-5 text-white' type="text" id="perusahaan" name="perusahaan" placeholder='Perusahaan'/>
                        </div>
                        <div className="mb-6">
                            <input className='bg-slate-900 h-8 w-80 rounded p-5 text-white' type="text" id="telepon" name="telepon" placeholder='Telepon'/>
                        </div>
                        <div className="mb-2">
                            <textarea className='bg-slate-900 w-80 h-28 ps-2 pt-2 text-white' name="pesan" id="pesan" placeholder='Pesan'/>
                        </div>
                        <button className='rounded bg-slate-900 text-white w-28 py-2 m-auto'>Kirim</button>
                    </div>
                </form>
            </div>
            <div className='m-auto gap-5 flex py-10'>
                <a className='w-40 h-10 rounded bg-green-500 flex justify-center items-center' href="mailto:muhamadkakahardiansyah@gmail.com">
                    <FontAwesomeIcon className="lg:text-3xl" icon={faEnvelope} />
                </a>
                <a className='w-40 h-10 rounded bg-green-500 flex justify-center items-center' href="https://wa.me/+6285157718328">
                    <FontAwesomeIcon className="lg:text-3xl" icon={faWhatsapp} />
                </a>
            </div>
        </div>
    );
}

export default Contact;