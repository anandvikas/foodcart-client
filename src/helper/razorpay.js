import React, { useEffect } from 'react'
import useRazorpay from "react-razorpay";
import useRequest from "../hooks/useRequest";
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"

import { useDispatch } from "react-redux";
import {getCartAction} from "../store/actionCreators/actionCreator";


const Rezorpay = ({amt, userId}) => {
    const { request: orderIdReq, response: orderIdRes } = useRequest();
    const { request: verifyReq, response: verifyRes } = useRequest();
    const { request: emptyCartReq, response: emptyCartRes } = useRequest();
    const Razorpay = useRazorpay();  
    const navigate = useNavigate()  
    const dispatch = useDispatch()

    const perform = () => {
        orderIdReq("POST", "/pay/getOrderId", {amt:amt*100})
    }

    useEffect(() => {
        if (orderIdRes) {
            let options = {
                "key": process.env.REACT_APP_RP_KEY, // Enter the Key ID generated from the Dashboard
                "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Food-Cart",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderIdRes.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "prefill": {
                    "name": "",
                    "email": "vikas7dev@gmail.com",
                    "contact": "7689079881"
                },
                "notes": {
                    "address": "this payment is for testing purpose"
                },
                "theme": {
                    "color": "#3399cc"
                },
                handler : function (response) {                    
                    verifyReq('POST', '/pay/verify', {...response, orderId:orderIdRes.data.id})
                }
            };
            let rzp1 = new Razorpay(options);
            rzp1.open();
        }
    }, [orderIdRes])

    useEffect(()=>{
        if(verifyRes){
            alert(verifyRes.test)
            emptyCartReq('POST', '/cart/empty', {userId})            
        }
    }, [verifyRes])
    useEffect(()=>{
        if(emptyCartRes){
            dispatch(getCartAction({ userId }));
            navigate('/')
        }
    }, [emptyCartRes])
    return (
        <div>
            {/* <button id="rzp-button1" onClick={perform}>Pay</button> */}
            <Button id='orBtn' onClick={perform}>Order</Button>
        </div>
    )
}

export default Rezorpay
