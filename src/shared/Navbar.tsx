
const navitems = [
    {name: "Home"   , path: "/"},
    {name: "Blog"   , path: "/blog"},
    {name: "About"  , path: "/about"},
]

export function Navbar() {
    return (
        <div className=" flex justify-center h-12 bg-gray-400">

            <div className=" flex justify-evenly w-full max-w-[1080px]">
                {
                    navitems.map( item => {
                        return (
                            <a 
                                className=" flex justify-center items-center w-[200px] hover:bg-white transition-all ease-in-out duration-500"
                                href={item.path}
                                >
                                    {item.name}
                            </a>
                        )
                    })
                }
            </div>

        </div>
    );
}