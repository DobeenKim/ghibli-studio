import Image from "next/image"
import Logo from "../public/logo2.png"
import Text from "../public/text.png"
import Link from "next/link"
import { MdFavoriteBorder } from "react-icons/md";


const Header = () => {
    return (
        <div>
            <div className="text-4xl w-full h-auto object-cover flex justify-between py-0 px-4">
                <Link href={`/`} className="w-52 h-auto cursor-pointer">
                    <Image src={Logo} alt="logo" className="w-full " />
                </Link>
                <div className="w-100 h-auto p-4">
                    <Image src={Text} alt="text" className="w-full"/>
                </div>
                <div className=" text-amber-50 text-base font-medium flex gap-6 p-6  items-center justify-center">
                <Link href={`/favorite/`}><MdFavoriteBorder  className="text-black place-items: center;" size={40}/></Link>
            </div>
            </div>
            
        </div>
    )
}

export default Header 