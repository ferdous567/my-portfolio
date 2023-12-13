import { Link } from "react-router-dom";

const AboutHome = () =>{
    return (
        <div className="md:flex items-center my-16">
        <img className="h-[350px] w-full" src="https://i.ibb.co/bdjH2GV/aboutimage.jpg" alt="" />
        <div className="px-4"> 
            <h3 className="text-5xl font-extrabold mb-4
                bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent
                bg-clip-text">About Me</h3>
        <p className="text-lg font-normal text-justify">Assalamualaikum. This is Khaleda Ferdous.Web Developer with over 1 years of
        experience.Experienced with all stages of the development cycle for dynamic
        web projects. Having on in-depth knowledge including advanced HTML5, CSS3,
        JavaScript, Node js, Express, MongoDB, Firebase. Coding is my passion. I love 
        coding very much.</p>
        <Link to ='/about'>
        <button className="btn bg-gradient-to-r from-red-500  to-violet-500 mt-4">Learn More</button>
        </Link>
        </div>
    </div>
    );
};

export default AboutHome;