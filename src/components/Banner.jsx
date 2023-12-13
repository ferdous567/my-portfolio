import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
    return (
        <div className="text-center md:text-left md:flex md:h-[500px] relative md:justify-between md:items-center bg-black text-white p-5 ">
            <div className="space-y-4">
                <h3 className="text-3xl mb-3 text-purple-500 font-bold">Assalamualaikum!</h3>
                <span className="text-4xl font-bold">This is</span>
                <h3 className="text-6xl font-extrabold 
                bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent
                bg-clip-text"> Khaleda Ferdous</h3>

                <TypeAnimation 
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Frontend web developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'UI/UX Designer',
                        1000,
                        // 'We produce food for Guinea Pigs',
                        // 1000,
                        // 'We produce food for Chinchillas',
                        // 1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold' }}
                    repeat={Infinity}
                />
                
                <div className="flex pl-16 md:pl-5 pb-10">
                    <button className="btn rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 hover:to-pink-400 mr-5">Hire Me</button>
                    <Link to = '/about'>
                    <button className="btn rounded-full btn-outline btn-accent">Show More..</button>
                    </Link>
                </div>
            </div>
            <div className=" ">
                <img className="h-[400px] w-[400px]  absolute right-3 md:left-[60%] bottom-28 md:bottom-24 transition-all duration-1000
             " src="https://i.ibb.co/RGK6hPt/oval2.png" alt="" />
                <img className="h-[450px] w-[300px] md:ml-12 md:absolute  md:left-[60%] md:-bottom-0 transition-all duration-1000
             hover:left-[62%] rounded-t-full" src="https://i.ibb.co/gP3jM2h/portfolio-image.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;