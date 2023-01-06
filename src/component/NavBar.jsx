import React from "react"
import { Link } from "react-router-dom"

export function NavBar() {
    return (
        <div className="container flex justify-between items-center mx-auto py-6 z-10 relative">
            <div className="mx-auto">
                <Link to="/" className="p-2 text-white" id="home">Home</Link>
                <Link to="/games" className="p-2 text-white" id="games">Games</Link>
            </div>
        </div>
    )
}