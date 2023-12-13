import { useEffect, useState } from 'react'
import { Puff } from 'react-loader-spinner';
// import Navbar from './components/Navbar';
// import Banner from './components/Banner';
// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
import Home from './components/Home/Home';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false);
    }, 1000);
  }, [])
  
  return (
    <div>
      {
        loading ? <div className='ml-[500px] mt-[200px]'>
          <Puff 
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
        </div>
        : <div >
            <Home></Home>
          
        </div>
        
      }
     
     
    </div>
    
  )
  
}

export default App;
