// IMPORTING CSS -------------------------------
import { useState, useEffect } from 'react';
import useRequest from '../../hooks/useRequest';
import {imageLoader} from "../../helper/helper"

import './viewNew.css'


// for scrolling ------------------------------------------------
function scrollLeft() {
    document.getElementById('scrolldiv').scrollLeft -= 380;
}
function scrollRight() {
    document.getElementById('scrolldiv').scrollLeft += 380;
}


// COMPONENT -------------------------------------
const ViewNew = () => {
    const [foodData, setFoodData] = useState(null)
    const { request, response } = useRequest()
    let n = 8;

    useEffect(() => {
        request("GET", `/product/get-all-client?&sort=addedOnDesc&perPage=${n}`);
    }, [])
    useEffect(() => {
        if (response) {
            setFoodData(response.data);
        }
    }, [response])
    return (
        <div className="onpCon">
            <h2 className="onpText">Our New Products</h2>
            <div className="onpProducts">
                <button id="scrollleft" className="scrollBtn" onClick={scrollLeft}>&lt;</button>
                <div className="horscroll" id="scrolldiv">
                    {
                        foodData && foodData.map((val) => {
                            return (
                                <div className="scrollitems" key={val._id}>
                                    <img src={imageLoader(val.image)} alt="" />
                                    <h2>{val.title}</h2>
                                </div>
                            );
                        })
                    }
                </div>
                <button id="scrollright" className="scrollBtn" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    );
}
export default ViewNew;