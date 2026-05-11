'use client'

import {useState, useEffect} from "react"
import { GhibliTypes } from "../types/type"
import Card from "./Card"
import Btn from "./btn"


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
                                <Card 
                                item={movie}
                                onAction={handleDelete}
                                />
                            </div>
                        ))}
                    </div>
                )
            }
            <Btn className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#118cd2] justify-center p-3"/>
        </div>
    )
}
export default Favorite