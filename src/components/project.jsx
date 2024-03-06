import CardProject from './cardproject';
import './style.css'

const Project = () => {
    return (
        <section id='project' className='lg:flex lg:pt-20 xs:pt-0 lg:flex-col xs:flex xs:flex-col'>
            <div className='flex flex-col items-center'>
                <h1 className="text-5xl text-center title-project">Project</h1>
                <div className="line-title-project"></div>
            </div>
            <CardProject/>
        </section>
    );
}

export default Project;