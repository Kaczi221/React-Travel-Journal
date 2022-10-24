import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {
    const props = data.map((item) => {
        return(
        <Card 
        key={item.id}
        item={item}
        />
        )
    })
    return(
        <div className="container">
            <Header />
            <div className="content">
                {props}
            </div>
        </div>
    )
}