import React from "react";
import { useParams } from "react-router-dom";

export default function Category() {
    let params = useParams();
    return <div style={{"margin-top":"100px"}}><h1>{params.catId}</h1></div>
}