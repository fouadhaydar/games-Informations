import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useFetchGame } from "../data/fetchData"

export function Details () {
    const [details, setDetails] = useState({})
    const location = useLocation()
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${location.state.id}`
    useEffect(()=>{
        useFetchGame(setDetails,url)
    },[])
    return (
    <>
    <div className="relative z-10 md:w-3/4 mx-auto md:backdrop-blur-lg md:border md:p-3 flex lg:flex-row esm:flex-col  ">
        {details.title && <div className="md:w-3/4">
            <div className="my-5 mx-5">
                <h3 className=" text-white pb-3">Title :</h3>
                <p className="text-gray-400 ">{details.title}</p>
            </div>
            <div className="my-5 mx-5">
                <h3 className="text-white pb-3 ">Description :</h3>
                <p className="text-gray-400">{details.description}</p>
            </div>
        </div>}
        {details.minimum_system_requirements && <div className="my-5 mx-5 md:w-1/4">
            <h3 className="text-white pb-3">Min System Requirements:</h3>
            <div className="my-3">
                <h4 className="text-white pb-3">Graphics :</h4>
                <p className="text-gray-400">{details.minimum_system_requirements.graphics}</p>
            </div>
            <div className="my-3">
                <h4 className="text-white pb-3">Memory :</h4>
                <p className="text-gray-400">{details.minimum_system_requirements.memory}</p>
            </div>
            <div className="my-3">
                <h4 className="text-white pb-3">OS :</h4>
                <p className="text-gray-400">{details.minimum_system_requirements.os}</p>
            </div>
            <div className="my-3">
                <h4 className="text-white pb-3">Processor :</h4>
                <p className="text-gray-400">{details.minimum_system_requirements.processor}</p>
            </div>
        </div>}
    </div>
        <div className="relative z-10 w-fit mx-auto py-4" id="screenshots">
            <h3 className="text-white mx-2 pt-6 my-3">Screenshots :</h3>
        <div className="relative z-10 gap-3 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 w-full">
            {Object.keys(details).length !== 0 && details.screenshots.map((item)=>{
                return <img src={item.image} alt="image" className="md:w-[384.5px] md:h-[216.5px] esm:w-[192px] esm:h-[108px] border" key={item.id} />
            })}    
                        
        </div>
    </div>
    </>
    )
}