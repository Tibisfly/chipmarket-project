import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardContainer from './cardContainer.js';
import { Context } from "../store";

export default function(props) {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <CardContainer/>
    
 
        </div>
    )
}