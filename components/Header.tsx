import Link from "next/link"
import Favorite from "./Favorite"
const Header = () => {
    return (
        <div className="bg-green-500 text-4xl">
            Header
            <Link href={`/`}>Home</Link>
            <Link href={`/favorite/`} >Favorite</Link>
        </div>
    )
}

export default Header 