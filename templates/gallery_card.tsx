import Image from 'next/image'
import { FaGithub } from "react-icons/fa";

interface GalleryCardPropsType {
    title: string
    description: string
    image: string
    alt: string
    githubLink?: string
}
  
const GalleryCard: React.FC<GalleryCardPropsType> = (props) => {

    const { title, image, githubLink } = props
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl lg:text-5xl font-bold pb-4'>{props.title}</p>
            <p className='text-md lg:text-lg text-center text-gray-500 font-light pb-8'>{props.description}</p>
            <Image
                className="rounded-lg shadow-lg"
                src={props.image}
                alt={props.alt}
                width={800}
                height={800}
                quality={100}
            />
            <div className='flex flex-wrap py-8'>
                {githubLink != undefined && 
                    <a href="https://github.com/tehcanai/SoalUndi" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl lg:text-5xl"/>
                    </a>
                }
            </div>
        </div>
    )
}

export default GalleryCard