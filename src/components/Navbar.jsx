import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navItems = <>
  <li><NavLink to = '/'>Home</NavLink></li>
  <li><NavLink to = '/about'>About Me</NavLink></li>
  <li><NavLink to = '/project'>Projects</NavLink></li>
  <li><NavLink to = '/contact'>Contact Me</NavLink></li>
  </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
      {navItems}
      </ul>
    </div>
    <h3 className="bg-gradient-to-r from-blue-600 via-pink-600 to-violet-600 text-transparent
                bg-clip-text font-extrabold text-3xl font-italic underline">KF/Papia</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to = 'https://drive.google.com/file/d/1hOkkHx9gMwL2WGpxPkAvBDbgtV-Nqi_P/view'>
    <button className="btn bg-gradient-to-r from-red-500  to-violet-500">Download CV</button>
    </Link>
  </div>
</div>
    );
};

export default Navbar;
