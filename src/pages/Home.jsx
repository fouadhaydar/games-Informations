import React from "react"
import { useFetchGame } from '../data/fetchData';
import { useState, useEffect } from 'react';
import { Scroller } from "../component/Scroller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function Home () {
    const navigate = useNavigate()
    const [data,setData] = useState([])
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
    useEffect(()=>{
      useFetchGame(setData,url)
    },[])
    const scrollerArry = data.slice(0,10)
    let divScroller = document.getElementById('scroller')

    function sliderLeft () {
        let arrowLeft = document.getElementById('left')
        arrowLeft.addEventListener('click',()=>{
            divScroller.scrollBy(-500,0)
        })
    }
    function sliderRight () {
        let arrowRight = document.getElementById('right')
        arrowRight.addEventListener('click',()=>{
            divScroller.scrollBy(500,0)
        })
    }
    return (
        <>
        <div className=" min-h-min my-10 z-10 relative">
            <div className="w-1/2 sm:w-full mx-auto h-24 my-20">
                <p className="text-white xl:text-3xl text-center lg:text-2xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
        <div className="flex flex-rwo items-center justify-end mx-8 my-1 relative z-10" >
            <h3 className="text-white p-2 ">See All games</h3>
            <FontAwesomeIcon icon={faArrowRight} className='text-white text-xl cursor-pointer' onClick={()=>{navigate('/games')}}/>
        </div>
        <div className="flex flex-row items-center relative z-10 py-10">
            <FontAwesomeIcon icon={faChevronLeft} className='text-white p-2' onClick={sliderLeft} id='left'/>
            <Scroller arry={scrollerArry}/>
            <FontAwesomeIcon icon={faChevronRight} className='text-white p-2' id="right" onClick={sliderRight}/>
        </div>
        </>
    )
}