import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import useRequest from "../../hooks/useRequest";


// STYLING -------------------------------------------
var footer1 = {
    borderTop: '5px double #233a3e',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1600px',
    margin: 'auto'
}
var sec1 = {
    flex: '50%',
    padding: '20px'
}
var sec2 = {
    flex: '50%',
    padding: '20px'
}
var heading = {
    padding: '30px'
}
var linksDiv = {
    display: 'flex',
    flexWrap: 'wrap'
}
var links = {
    padding: '10px',
    margin: '20px',
    fontSize: '30px',
    color: '#233a3e'
}
var susCon = {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap'
}
var input = {
    display: 'block',
    flex: '70%',
    maxWidth: '70%',
    margin: '10px',
    padding: '10px',
    outline: 'none',
    border: '2px solid #233a3e',
    borderRadius: '10px'
}
var button = {
    display: 'block',
    flex: '30%',
    maxWidth: '30%',
    margin: '10px',
    padding: '10px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#233a3e',
    color: 'white',
    borderRadius: '10px'
}

// COMPONENT --------------------------------------------
const Footer1 = () => {
    const { status } = useSelector((state) => state.reducer1.loggedIn);
    const [semail, uSemail] = useState({ email: '' })
    const { request, response } = useRequest()
    const changed = (e) => {
        let { name, value } = e.target
        uSemail((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const submit = (e) => {
        e.preventDefault()

        request("POST", "/nlSubscriber/add", { emailId: semail.email })
        uSemail({ email: '' })
    }

    useEffect(() => {
        if (response) {
            if (response.success) {
                alert('thanks for subscribing')
                uSemail({ email: '' })
            } else {
                alert("Couldn't subscribe")
            }
        }
    }, [response])
    
    return (
        <div style={footer1}>
            <div style={sec1}>
                <h3 style={heading}>Follow us on</h3>
                <div style={linksDiv}>
                    <a href="https://www.facebook.com/" target='_blank' style={links}><FacebookIcon /></a>
                    <a href="https://twitter.com/" target='_blank' style={links}><TwitterIcon /></a>
                    <a href="https://www.youtube.com/" target='_blank' style={links}><YouTubeIcon /></a>
                    <a href="https://www.linkedin.com/" target='_blank' style={links}><LinkedInIcon /></a>
                    <a href="https://www.instagram.com/" target='_blank' style={links}><InstagramIcon /></a>
                </div>
            </div>
            <div style={sec2}>
                {
                    !status &&
                    <>
                        <h3 style={heading}>Suscribe to our News Letter</h3>
                        <form style={susCon} onSubmit={submit}>
                            <input type="email" placeholder="email address" style={input} required name='email' value={semail.email} onChange={changed} />
                            <button type='submit' style={button} >Suscribe</button>
                        </form>
                    </>
                }

            </div>
        </div>
    );
}
export default Footer1;