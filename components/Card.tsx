import { GhibliTypes } from "../types/type"

interface CardProps {
    item:GhibliTypes;
    onAction:(item:GhibliTypes) => void
}

const Card = ({item,onAction}:CardProps) => {
    return (
        <div>
            <button onClick={()=>onAction(item)} className=" cursor-pointer">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold drop-shadow-md opacity-0 group-hover:opacity-100 ">
                        {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-2 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                        {item.description}
                    </p>
                    <span className="inline-block mt-3 text-xs text-sky-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                        Director: {item.director}
                    </span>
                </div>
            </button>
        </div>
    )
}

export default Card