import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export function Card ({thumbnail,title,shortDescription,id ,grid}) {
    // const { isError, error } = useErrorBoundary();

//   if (isError) {
//     return <div>An error occurred: {error.message}</div>;
//   }

    const navigate = useNavigate()
    const location = useLocation()
        function handleClick () {
            navigate(`/details`,{state:{id:id}})
            console.log(id)
            console.log(location)
        }
    
    return (
        <div 
            id="thumbnail"
            className={`relative lg:w-[365px] lg:h-[206px] w-[292px] h-[164.8px] hover:scale-110 duration-200 cursor-pointer overflow-hidden inline-block whitespace-pre-line border-2 ${!grid ? 'mx-4':''}`}
            onClick={handleClick}>
            <img src={thumbnail} alt="thumbnail" className="w-full h-full" id="my-image"/>
            <div className="absolute text-white flex flex-col" id="overlay" >
                <h1 className="text-2xl py-2 sm:py-0.5 md:py-0.5 sm:text-sm md:text-sm xl:text-2xl">{title}</h1>
                <p className="text-md h-14 sm:text-sm">{shortDescription}</p>
            </div>
        </div>
    )
}
// overflow-hidden