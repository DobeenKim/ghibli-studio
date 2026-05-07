'use client'

import {useState, useEffect} from "react"
import { GhibliTypes } from "../types/type"
import Card from "./Card"

const Favorite = () => {
    const [save, setSave] = useState<GhibliTypes[]>([])

    const handleDelete = (movie:GhibliTypes) => {
        const data = localStorage.getItem('savedGhibli')
        const list = data ? JSON.parse(data) : []
        const updatedList = list.filter((item:GhibliTypes) => item.id !== movie.id);

        localStorage.setItem('savedGhibli', JSON.stringify(updatedList))

        setSave(updatedList)
        alert("Removed from favorites.");
    }

    useEffect(()=> {
        const ghibliData = localStorage.getItem('savedGhibli')
        if(ghibliData) {
            const parsedData = JSON.parse(ghibliData)

            setSave(parsedData)
            console.log(parsedData)
        } else {
        []
        }
    },[])
    return (
        <div className=" text-center text-[#0c74b0] border-t  border-[#118cd2] w-[95%] mx-auto">
            <h1 className="text-2xl font-bold pt-8">My Ghibli storage</h1>
            {save.length === 0 ?(
                <p className="text-[#0d4c71] text-2xl font-bold mb-5 pt-16">Your favorites list is empty.</p>
                ) : (
                    <div className="w-5/6 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-4 gap-4 pt-8 pb-8">
                        {save.map((movie:GhibliTypes) => (
                            <div key={movie.id}  className="relative group w-full overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                                {/*<button onClick={()=>handleDelete(movie.id)} className="text-red-700 cursor-pointer">
                                <img 
                                    src={movie.image} 
                                    alt={movie.title} 
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-xl font-bold drop-shadow-md opacity-0 group-hover:opacity-100">
                                        {movie.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mt-2 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                                        {movie.description}
                                    </p>
                                    <span className="inline-block mt-3 text-xs text-sky-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        Director: {movie.director}
                                    </span>
                                </div>
                                </button>*/}
                                <Card 
                                item={movie}
                                onAction={handleDelete}/>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}
export default Favorite