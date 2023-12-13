import { FaLinkedinIn, FaGithub, FaPhoneAlt  } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <h3 className="bg-gradient-to-r from-blue-600 via-pink-600 to-violet-600 text-transparent
                bg-clip-text font-extrabold text-3xl font-italic underline">KF/Papia</h3>
                <h4 className='underline text-lg font-bold '>My personal Info</h4>
                <p className='flex gap-2 items-center'><MdEmail></MdEmail> papiaferdous43@gmail.com</p>
                <p className='flex gap-2 items-center'><FaPhoneAlt></FaPhoneAlt> +880-1847543567</p>
                <p className='flex gap-2 items-center'><FaLocationDot></FaLocationDot> Noakhali, Bangladesh.</p>
            </aside>
            <nav className='w-full'>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4 ">
                    <div className='text-2xl text-white flex gap-4'>
                        <Link to='https://www.linkedin.com/in/khaleda-ferdous-a86825297/'
                        > <FaLinkedinIn></FaLinkedinIn></Link>
                        <Link to='https://github.com/ferdous567'
                        > <FaGithub></FaGithub></Link>
                    </div>
                    <Link to='https://web.facebook.com/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                </div>
                <p className='mt-10'>Copyright © 2023 <br /> All right reserved by Khaleda Ferdous</p>
            </nav>
        </footer>
    );
};

export default Footer;