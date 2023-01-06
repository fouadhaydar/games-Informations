
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { Card } from "../component/Card";
import { useFetchGame } from "../data/fetchData";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function Games () {
    const [gameList,setGameList] = useState([])
    const [newArr,setNewArr] = useState([]);
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'

    useEffect(()=>{
        useFetchGame(setGameList,url)
    },[url])
    useEffect(()=>{
        const newFiltered = gameList.filter((game) => {
            return game.title !== 'Epic Cards Battle'
            && game.title !== 'Aero Tales Online'
            && game.title !== 'Eternal Fury'
            && game.title !== 'MU Legend' 
            && game.title !== 'Dragon Awaken'
            && game.title !== 'League of Angels 2'
            && game.title !== '5Street'
            && game.title !== 'Atlantica Online'
            && game.title !== 'Mission Against Terror'
            && game.title !== 'BlackShot: Revolution'

        })
        setNewArr(newFiltered)
    },[gameList])

    function handleChange (e) {
        let filteredData = gameList.filter((item)=>{
            return item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
             && item.title !== 'Epic Cards Battle' 
             && item.title !== 'Aero Tales Online'
             && item.title !== 'Eternal Fury'
             && item.title !== 'MU Legend' 
             && item.title !== 'Dragon Awaken'
             && item.title !== 'League of Angels 2'
             && item.title !== '5Street'
             && item.title !== 'Atlantica Online'
             && item.title !== 'Mission Against Terror'
             && item.title !== 'BlackShot: Revolution'
        })
        setNewArr(filteredData)
    }
    return (
        <>
        <div className=" relative z-10 flex flex-col gap-6 items-center ">
            <div className="w-[300px] relative bg-white">
                <input type="text" className=" w-full px-8 focus:outline-sky-400 " onChange={handleChange}/>
                <FontAwesomeIcon icon={ faSearch } className='absolute left-0 py-1 px-2'/>
            </div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 esm:gap-4 lg:gap-6 xl:gap-6 max-w-fit mx-auto">
            {newArr.map((item,index)=>{
                return(
                    <Card 
                    key={item.id}
                    thumbnail={item.thumbnail} 
                    title={item.title}
                    shortDescription={item.short_description}
                    id={item.id} 
                    grid
                    />
                )
                })}
            </div>
        </div>

       
        </>
    )
}