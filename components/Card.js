import React from "react"
import data from "../data.js"

export default function Card(props) {
    
    
    return(
        <div className="card">
            <img src={`${props.item.imageUrl}`} className="card--img"/>
            <div className="card--info">
                <div className="card--location">
                    <i className="fa-solid fa-location-dot"></i>
                     <p className="card--country">{props.item.location}</p>
                    <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <h3 className="card--date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}