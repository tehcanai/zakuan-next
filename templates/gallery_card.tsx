import Image from 'next/image'
import { FaGithub, FaApple, FaAndroid } from "react-icons/fa";

interface GalleryCardPropsType {
    title: string
    description: string
    image: string
    alt: string
    githubLink?: string
    appleStoreLink?: string
    googlePlayLink?: string
}
  
const GalleryCard: React.FC<GalleryCardPropsType> = (props) => {

    const { title, image, githubLink, appleStoreLink, googlePlayLink } = props
    
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
            <div className='flex flex-wrap py-8 gap-x-8'>
                {githubLink != undefined && 
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl lg:text-3xl"/>
                    </a>
                }
                {appleStoreLink != undefined &&
                    <a href={appleStoreLink} target="_blank" rel="noopener noreferrer">
                    <FaApple className="text-xl lg:text-3xl"/>
                    </a>

                }
                {googlePlayLink!= undefined &&
                    <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
                    <FaAndroid className="text-xl lg:text-3xl"/>
                    </a>
                }
            </div>
        </div>
    )
}

export default GalleryCard