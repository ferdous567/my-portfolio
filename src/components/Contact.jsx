import Footer from "./Footer";
import Navbar from "./Navbar";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7t5r5yn', 'template_vzpclma', form.current, '2Bsg5cN4pteG2z9Kj')
            .then((result) => {
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
            
    };

    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-5xl pt-18 mb-12  text-center font-bold 
                bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-transparent
                bg-clip-text">Send Your Email</h3>
            <div>

            </div>
            <form ref={form} onSubmit={sendEmail} className="w-full  md:w-2/3 md:mx-auto rounded p-10 bg-pink-200 mb-10">
                <input name="name" className="border p-4 w-full mb-10" placeholder="Your Name" type="text" />
                <input name="email" className="border p-4 w-full mb-10" placeholder="Your Email" type="email" />
                <textarea name="message" className="w-full p-4 mb-10" placeholder="Write Your Message" id="" cols="30" rows="10"></textarea>
                <input type="submit"
                    className="btn rounded-full bg-gradient-to-br from-blue-500 via-purple-500 
                to-pink-500 hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 
                hover:to-pink-400 mr-5" value="Send Message" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Contact;