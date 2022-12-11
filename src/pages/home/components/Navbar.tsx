
const navitems = [
    {name: "Home"   , path: ""},
    {name: "Blog"   , path: ""},
    {name: "About"  , path: ""},
]

export function Navbar() {
    return (
        <div className=" flex justify-center h-12 bg-gray-400">

            <div className=" flex justify-evenly w-full max-w-[1080px]">
                {
                    navitems.map( item => {
                        return (
                            <div className=" flex items-center w-[200px] text-center hover:bg-white transition-all ease-in-out duration-500">
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}