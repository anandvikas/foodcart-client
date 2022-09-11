import './contact.css'

const Contact = () => {
    return (
        <div className="contactCon">
            <div className="contact-1">
                <h1 className="contact-1-1">Contact</h1>
                <p className="contact-1-2">Hello my name is Vikas Anand</p>
                <div className="contact-1-3">                    
                    <a href='https://github.com/anandvikas' target='_blank'>GitHub</a>
                    <a href='https://www.linkedin.com' target='_blank'>LinkedIn</a>
                </div>
                <h3 className="contact-1-4">Contact me</h3>
                <ul className="contact-1-5">
                    <li>Email : vikas@yopmail.com</li>
                    <li>Phone : +91 7888888888</li>
                </ul>
            </div>
        </div>
    )
}
export default Contact;
