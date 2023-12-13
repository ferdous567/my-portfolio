import Education from "./Education";
import Footer from "./Footer";
// import AboutHome from "./Home/AboutHome";
import Navbar from "./Navbar";

const skills = [
    {
        "id": 1,
        "name": "HTML",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxk8D0ycM6qcGE6lUkmkBTo0KQ_XhnATYtHw&usqp=CAU"
    },
    {
        "id": 2,
        "name": "CSS",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxPwvdEBa1Ghn4lPutlKJPInBAgpxMry3SA&usqp=CAU"
    },
    {
        "id": 3,
        "name": "Javascript",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTvo53hbY9B5GYfv5QU3-hysFHvHpwjwbHw&usqp=CAU"
    },
    {
        "id": 4,
        "name": "React",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQCb1tXYaFzxoObP3zfyW2qzeRtakpc2PKQ&usqp=CAU"
    },
    {
        "id": 5,
        "name": "Firebase",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwpI8U5-Dl66-vtxn5S9AxNkjA9NO-1GRsw&usqp=CAU"
    },
    {
        "id": 6,
        "name": "MongoDB",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMRzP2i8h_xIFrtbyJvXy29eTCtyUpwIrzg&usqp=CAU"
    },
    {
        "id": 7,
        "name": "Tailwind",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlUubML1kqkEQU355V79LEKug28ISSfZ48Q&usqp=CAU"
    },
    {
        "id": 8,
        "name": "DaisyUI",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1wXbNHu71FIVcwPD6BwGrIwG9KGYqFOTug&usqp=CAU"
    },
    {
        "id": 9,
        "name": "Node js",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGWCV8ZzYFcAO3UMw9fE3NU9FJom9TW8gBw&usqp=CAU"
    },
    {
        "id": 10,
        "name": "EXPRESS js",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpCVrym3sQKRS3_hAnLQIocLuMJorvv0Jiw&usqp=CAU"
    },
    {
        "id": 11,
        "name": "Next js",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiZrpe3bGLvdCAQWN4hO55ou7YDrRj6QgWw&usqp=CAU"
    },
]


const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-6xl mt-8 underline text-center font-bold mb-4
                bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-transparent
                bg-clip-text">About Me</h3>
            <div className="md:flex items-center mb-16">
                <img className="h-[300px] w-full" src="https://i.ibb.co/bdjH2GV/aboutimage.jpg" alt="" />
                <p className="text-justify">Assalamualaikum. This is Khaleda Ferdous.Web Developer with over 1 years of
                    experience.Experienced with all stages of the development cycle for dynamic
                    web projects. Having on in-depth knowledge including advanced HTML5, CSS3,
                    JavaScript, Node js, Express, MongoDB, Firebase. Coding is my passion. I love
                    coding very much.</p>
            </div>
            <div>
                <h3 className="text-6xl my-8 underline text-center font-bold 
                bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-transparent
                bg-clip-text">My Gained Skill</h3>

                <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 mx-w-screen-lg my-10 cursor-pointer">
                    {
                        skills.map(item => <div key={item.id} className="card  bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={item?.image} alt="Shoes" className="rounded-xl h-[160px] w-[180ox] " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item?.name}</h2>

                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div>
                <h3 className="text-5xl mt-24 mb-16 underline text-center font-bold 
                bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-transparent
                bg-clip-text">My Educational Qualifications</h3>
                <Education></Education>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default AboutMe;