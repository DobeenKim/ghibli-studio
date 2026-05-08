import Link from "next/link"
import { MdFavoriteBorder } from "react-icons/md";

interface BtnProps {
    className:string;
    children?:React.ReactNode;
}

const Btn = ({className, children}:BtnProps) => {
    return (
        <div className={` text-amber-50 text-base font-medium gap-6 md:p-6 p-2  items-center ${className || ""}`}>
            <Link href={`/favorite/`}><MdFavoriteBorder className="text-black place-items: center; w-8 h-8 lg:w-12 lg:h-12"/></Link>
            {children}
        </div>
    )
}

export default Btn