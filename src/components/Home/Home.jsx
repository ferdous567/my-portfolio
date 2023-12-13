// import { useEffect, useState } from 'react'
// import { Puff } from 'react-loader-spinner';
import Navbar from '../Navbar';
// import AboutMe from '../AboutMe';
// import Projects from '../Projects';
import Banner from '../Banner';
import Footer from '../Footer';
import AboutHome from './AboutHome';
import ProjectHome from './ProjectHome';



const Home = () => {


  //   const [loading, setLoading] = useState(true);

  // useEffect(() =>{
  //   setTimeout(() =>{
  //     setLoading(false);
  //   }, 1000);
  // }, [])

    return (
        <div>
      <div >
          
          <Navbar></Navbar>
          <Banner></Banner>
          <AboutHome></AboutHome>
          <ProjectHome></ProjectHome>
          <Footer></Footer>
        </div>
     
     
    </div>
    );
};

export default Home;