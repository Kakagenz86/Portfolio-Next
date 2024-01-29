import CardProject from './cardproject';
import './style.css'

const Project = () => {
    return (
        <section className='lg:flex lg:flex-col lg:pt-0 xs:flex xs:pt-60 xs:flex-col'>
            <div className='flex flex-col items-center'>
                <h1 className="text-5xl text-center title-project">Project</h1>
                <div className="line-title-project"></div>
            </div>
            <CardProject/>
        </section>
    );
}

export default Project;