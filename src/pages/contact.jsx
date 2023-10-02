
import Navbar from "../components/navbar";
import ProjectContact from "../components/projectContact";
import ContactForm from "../components/contactForm";


function Contact () {
    return (
        <>
        <div className="page">
        <Navbar/>
        <ProjectContact/>
        <ContactForm/>
        </div>
        </>
    )
};

export default Contact