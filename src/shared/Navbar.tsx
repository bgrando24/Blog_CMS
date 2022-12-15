
const navitems = [
    {name: "Home"   , path: "/"},
    {name: "Blog"   , path: "/blog"},
    {name: "About"  , path: "/about"},
    {name: "Publish", path: "/publish"}
]

export function Navbar() {
    return (
        <div className=" flex justify-center h-12 bg-white sticky top-0 shadow-md shadow-slate-300">

            <div className=" flex justify-evenly w-full max-w-[1080px]">
                {
                    navitems.map( (item, i) => {
                        return (
                            <a 
                                className=" flex justify-center items-center w-[200px] hover:scale-105 hover:underline transition-all ease-in-out duration-300"
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