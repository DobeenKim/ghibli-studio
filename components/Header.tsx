import Image from "next/image"
import Logo from "../public/logo2.png"
import Text from "../public/text.png"
import Link from "next/link"
import { MdFavoriteBorder } from "react-icons/md";


const Header = () => {
    return (
        <div>
            <div className="text-4xl w-full h-auto object-cover py-0 px-4 pr-8 flex flex-col items-center md:flex-row md:justify-between">
                <Link href={`/`} className="block w-24 md:w-32 lg:w-52 h-auto cursor-pointer ">
                    <Image src={Logo} alt="logo" className="w-full " />
                </Link>
                <div className="w-70 lg:w-100 h-auto p-1 md:p-4">
                    <Image src={Text} alt="text" className="w-full"/>
                </div>
                <div className=" text-amber-50 text-base font-medium flex gap-6 md:p-6 p-2  items-center justify-center">
                    <Link href={`/favorite/`}><MdFavoriteBorder className="text-black place-items: center; w-8 h-8 lg:w-12 lg:h-12"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header 