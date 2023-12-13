import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      
    },
   
    {
      path: '/about',
      element: <AboutMe></AboutMe>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/project',
      element: <Projects></Projects>
    }
  ]);

export default router;