'use client'

import {useState, useEffect} from  "react"
import {GhibliTypes} from "../types/type"
import Card from "./Card"
import Btn from "./btn"
import toast, {Toaster}  from 'react-hot-toast';

const Ghibli = () => {

    const [films , setFilms] = useState<GhibliTypes[]>([]);
    const [message, setMessage] = useState<string | null>(null)
    useEffect(() => {
        if(message) {
            if(message.includes("Already")) {
                toast.error(message);
            } else {
                toast.success(message)
            }
            setMessage(null)
        }
    },[message])

    const handleClick = (movie:GhibliTypes) => {
        const getmoreGhibli = localStorage.getItem('savedGhibli')
        const parseGhibli:GhibliTypes[] = getmoreGhibli ?  JSON.parse(getmoreGhibli) : []
        const isAlreadyThere = parseGhibli.some(item=> item.id === movie.id)
        
        if(isAlreadyThere) {
            setMessage("Already added to favorites!");
            return;
        } else {
            setMessage("Added to favorites!")
        }
        
        parseGhibli.push(movie)
        
        localStorage.setItem('savedGhibli', JSON.stringify(parseGhibli))
    }
    
    const fetchGhibli = async() => {
        try {
            const response:Response = await fetch(`https://ghibliapi.dev/films`)
            const data:any = await response.json()
            setFilms(data)
        } catch (error) {
            console.log( error )
        }
    }

    useEffect(() => {
        fetchGhibli()
    },[])

    return (
        <div className=" border-t  border-[#118cd2] w-[95%] mx-auto">
            <button onClick={()=>handleClick}>Add to favorites</button>
            <Toaster position="top-center" reverseOrder={false}/> 
            <div className="w-[83%] mx-auto pt-8 font-bold 600">
                <p>Hover over any image to reveal detailed information about the movie!</p>
                <p>Pick your favorite Ghibli films to save them in your local storage!</p>
            </div>
            <div className="
                w-5/6 
                mx-auto  
                grid 
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                grid-rows-6 
                gap-4
                pt-8
                pb-8
            ">
            {films && films.map((movie:GhibliTypes,index:number) => (
                <div key={index} className="relative group w-full overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <Card
                    item={movie}
                    onAction={handleClick}
                    />
                </div>
            ))}
            </div>
            <Btn className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#118cd2] justify-center p-3"/>
            
        </div>
    )
}

export default Ghibli 