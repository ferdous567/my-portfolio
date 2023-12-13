import { Link } from "react-router-dom";


const projects = [
    {
        "id": "Project 1",
        "name": "Brand Food Collection",
        "image": "https://i.ibb.co/568VZRd/project01.jpg"
    },
    {
        "id": "Project 2",
        "name": "Resturant Management Website",
        "image": "https://i.ibb.co/8sbLdWJ/project2.jpg"
    },
    {
        "id": "Project 3",
        "name": " Wedding Management Website",
        "image": "https://i.ibb.co/jDcY5Zz/project3.jpg"
    },
]

const ProjectHome = () => {
    return (
        <div>
            <div className="text-center">
                <h3 className="text-2xl font-bold text-green-500">My Projects</h3>
                <h3 className="text-5xl  mb-16 underline text-center font-bold 
                bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-transparent
                bg-clip-text">Last Three Leatest Projects</h3>
            </div>

            <div className="w-full">
                <div className="mb-10 md:flex md:justify-between p-8">
                    <img className="md:w-1/2" src="https://i.ibb.co/568VZRd/project01.jpg" alt="" />
                    <div className="w-full md:pl-12 md:w-1/2">
                        <h2 className="text-2xl font-bold text-green-500">Project 1</h2>
                        <h2 className="text-purple-600 text-3xl font-bold">Brand Food Collection</h2>
                        <h3 className="text-xl font-bold ">Details:</h3>
                        <p className="text-justify my-2">This is brand wise food collection website. All type top brand product items there 
                            have. User can add product, buy product, and see add item.There have login based authentication.
                            This project is make by: Javascript, React, Tailwind, DaisyUI, Firebase, MongoDB etc.</p>
                        <div className="flex">
                        <Link to = 'https://food-bevarage.web.app/'>
                            <button className="btn rounded-full bg-gradient-to-br from-blue-500 via-purple-500 
                            to-pink-500 hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 
                            hover:to-pink-400 mr-5">See Live Demo</button>
                        </Link>
                        <Link to='https://github.com/ferdous567/food-bevarage-a10-client'>
                            <button className="btn rounded-full btn-outline btn-accent">Github Code</button>
                        </Link>
                    </div>
                    </div>
                   
                </div>
                <div className="my-20 flex flex-col-reverse md:flex-row md:justify-between p-8">
                   
                    <div className="w-full md:pr-12 md:w-1/2">
                        <h2 className="text-2xl font-bold text-green-500">Project 2</h2>
                        <h2 className="text-purple-600 text-3xl font-bold">Resturant Management Website</h2>
                        <h3 className="text-xl font-bold ">Details:</h3>
                        <p className="text-justify my-2">This is resturant management website. All food items of resturant are there.
                        User can order item, see their item, and delete and update their item.There have login based authentication.
                            This project is make by: Javascript, React, Tailwind, DaisyUI, Firebase, MongoDB etc.</p>
                        <div className="flex">
                        <Link to = 'https://vague-bikes.surge.sh/'>
                            <button className="btn rounded-full bg-gradient-to-br from-blue-500 via-purple-500 
                            to-pink-500 hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 
                            hover:to-pink-400 mr-5">See Live Demo</button>
                        </Link>
                        <Link to='https://github.com/ferdous567/erema-resturant-client-a11'>
                            <button className="btn rounded-full btn-outline btn-accent">Github Code</button>
                        </Link>
                    </div>
                    </div>

                    <img className="md:w-1/2 " src="https://i.ibb.co/8sbLdWJ/project2.jpg" alt="" />
                   
                </div>
                <div className="my-20 md:flex md:justify-between p-8">
                    <img className="md:w-1/2" src="https://i.ibb.co/jDcY5Zz/project3.jpg" alt="" />
                    <div className="w-full md:pl-12 md:w-1/2">
                        <h2 className="text-2xl font-bold text-green-500">Project 3</h2>
                        <h2 className="text-purple-600 text-3xl font-bold">Wedding Management Website</h2>
                        <h3 className="text-xl font-bold ">Details:</h3>
                        <p className="text-justify my-2">This website is wedding related management system.
                        All of the arrangement of the wedding such as holud, bouvat decoration, food supply etc they can arrange.
                        They get order complete packege and fully completed that. There have others party management.
                        There have login based authentication. This project is make by: Javascript, React, Tailwind, DaisyUI, Firebase, MongoDB etc.</p>
                        <div className="flex">
                        <Link to = 'https://happy-wedding-assignment.web.app/'>
                            <button className="btn rounded-full bg-gradient-to-br from-blue-500 via-purple-500 
                            to-pink-500 hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 
                            hover:to-pink-400 mr-5">See Live Demo</button>
                        </Link>
                        <Link to='https://github.com/ferdous567/happy-wedding-ass9'>
                            <button className="btn rounded-full btn-outline btn-accent">Github Code</button>
                        </Link>
                    </div>
                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default ProjectHome;