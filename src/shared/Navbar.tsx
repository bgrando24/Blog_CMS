import { NavLink } from "react-router-dom";

const navitems = [
    {name: "Home"   , path: "/"         , active: false},
    {name: "Blog"   , path: "/blog"     , active: false},
    {name: "About"  , path: "/about"    , active: false},
    {name: "Publish", path: "/publish"  , active: false}
]


export function Navbar() {

    const queryString = window.location.pathname;
    console.log(queryString);

    switch (queryString){
        case "/":
            navitems[0].active = true;
            break;
        
        case "/blog":
            navitems[1].active = true;
            break;
        
        case "/about":
            navitems[2].active = true;
            break;
        
        case "/publish":
            navitems[3].active = true;
            break;

        default:
            console.log("Query string in navbar not recognised");
            break;
    }



    return (
        <div className=" flex justify-center h-12 bg-white sticky top-0 shadow-md shadow-slate-300">

            <div className=" flex justify-evenly w-full max-w-[1080px]">
                {
                    navitems.map( (item, i) => {
                        return (
                            <NavLink 
                            className={({ isActive }) => 
                            [
                              "flex justify-center items-center w-[200px] hover:scale-105 hover:underline transition-all ease-in-out duration-300",
                              isActive ? "bg-primary text-white" : null,
                            ]
                              .filter(Boolean)
                              .join(" ")
                          }
                                to={item.path}
                                key={i}
                                >
                                    {item.name}
                            </NavLink>
                        )
                    })
                }
            </div>

        </div>
    );
}


