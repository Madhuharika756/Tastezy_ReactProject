import UserClass from "./UserClass";
const About = () => {
    return (
        <>
            <div className="w-8/12 mx-auto my-2.5 shadow-md p-4 rounded-md">
                <h1 className="text-3xl font-bold  text-amber-500 ">About Tastezy</h1>
                <p className="text-left text-lg text-gray-700 mt-2 ">Welcome to Tastezy, a place where food is not just listed — it’s celebrated. From sizzling street snacks to elegant desserts, our platform is designed to showcase a handpicked collection of dishes that are bound to delight your senses.</p>

                <p className="text-left text-lg text-gray-700">Tastezy is all about exploring flavors, textures, and culinary creativity. Whether you're here to browse, get inspired, or simply feast with your eyes, we bring you closer to the world of food — one beautiful dish at a time.</p>
                <p className="border-b-1 border-gray-400 my-4"></p>
                <h1 className="text-3xl font-bold  text-amber-500">What Tastezy Offers</h1>
                <ul className="mt-2">
                    <li className="space-y-1">
                        <h2 className="text-xl font-bold flex items-center">
                            🍲 <span className="ml-2">Curated Dishes</span>
                        </h2>
                        <p className="pl-7 text-gray-700  text-lg">
                            Discover a wide variety of food items, from local favorites to international cuisines — all showcased with stunning visuals.
                        </p>
                    </li>
                    <li className="space-y-1">
                        <h2 className="text-xl font-bold flex items-center">
                            📸 <span className="ml-2">Visual Experience</span>
                        </h2>
                        <p className="pl-7 text-gray-700  text-lg">
                            Our platform focuses on presentation. Because food isn't just to be eaten — it's to be admired.
                        </p>
                    </li>
                    <li className="space-y-1">
                        <h2 className="text-xl font-bold flex items-center">
                            🎨 <span className="ml-2">Aesthetic Design</span>
                        </h2>
                        <p className="pl-7 text-gray-700  text-lg">
                            Smooth layouts, vibrant colors, and intuitive browsing that make food discovery a joy.
                        </p>
                    </li>
                </ul>
                <p className="border-b-1 border-gray-400 my-4"></p>
                <h1 className="text-3xl font-bold  text-amber-500">Our Passion</h1>
                <p className="text-left text-lg text-gray-700 mt-2 ">We’re passionate about food, design, and storytelling. Tastezy was built to spark cravings, capture attention, and celebrate the art of cooking — all without the noise of delivery timelines or checkout pages.</p>
                <p className="text-left text-lg text-gray-700 mt-2 ">So take your time, explore our menu, and let your cravings guide you.</p>
            </div>
        </>
    )
}

export default About;
