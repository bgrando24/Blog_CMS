
const navitems = [
    {name: "Home"   , path: "/"},
    {name: "Blog"   , path: "/blog"},
    {name: "About"  , path: "/about"},
    {name: "Publish", path: "/publish"}
]

export function Navbar() {
    return (
        <div className=" flex justify-center  h-12 bg-gray-400 sticky top-0">

            <div className=" flex justify-evenly w-full max-w-[1080px]">
                {
                    navitems.map( (item, i) => {
                        return (
                            <a 
                                className=" flex justify-center items-center w-[200px] hover:bg-white transition-all ease-in-out duration-500"
                                href={item.path}
                                key={i}
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