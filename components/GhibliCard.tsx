'use client'

import {useState, useEffect} from  "react"
import {GhibliTypes} from "../types/type"

const Ghibli = () => {

    const [films , setFilms] = useState<GhibliTypes[]>([]);

    const handleClick = (movie:GhibliTypes) => {
        const getmoreGhibli = localStorage.getItem('savedGhibli')
        const parseGhibli:GhibliTypes[] = getmoreGhibli ?  JSON.parse(getmoreGhibli) : []

        const isAlreadyThere = parseGhibli.some(item=> item.id === movie.id)
        if(isAlreadyThere) {
            alert("Already added to favorites!");
            return; 
        }

        parseGhibli.push(movie)
        localStorage.setItem('savedGhibli', JSON.stringify(parseGhibli))
    }
    
    const fetchGhibli = async() => {
        try {
            const response:Response = await fetch(`https://ghibliapi.dev/films`)
            const data:any = await response.json()
            setFilms(data)
            console.log("데이터연결",data)
        } catch (error) {
            console.log( error )
        }
    }

    useEffect(() => {
        fetchGhibli()
    },[])
    return (
        <div className=" border-t  border-[#0d4c71] w-[95%] mx-auto"> 
            <div className="
                w-5/6 
                mx-auto  
                grid 
                grid-cols-4 
                grid-rows-6 
                gap-4
                pt-8
                pb-8
            ">
            {films && films.map((item:any,index:number) => (
                <div key={index} className="relative group w-full overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <button onClick={()=>handleClick(item)} className="text-red-700 cursor-pointer">
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
            ))}
            </div>
        </div>
    )
}

export default Ghibli 