import { useState } from 'react';
import './custsup.css'

const CustSup = () => {
    const [data , updateData] = useState({email:'', meText:''})
    const changed = (e) => {
        let {name, value} = e.target
        // console.log(name, value)
        updateData((prev)=>{
            return {...prev, [name]: value}
        })
    }
    const submit = (e) => {
        e.preventDefault()
        alert('Thank You for your feedback')
        updateData({email:'', meText:''})
    }
    return (
        <div className='csCon'>
            <h1>Any feedback related to our service ?</h1>
            <h2>Please let us know</h2>
            <div className='csformdiv'>
                <form onSubmit={submit}>                    
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter Email" name="email" required className="emailField" onChange={changed} value={data.email}/>

                    <label htmlFor="psw">Message</label>
                    <textarea name="meText" className='meField' required onChange={changed} value={data.meText}/>

                    <div className="csButton">                        
                        <input type="submit" value="Send" id="csSubmit" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default CustSup;