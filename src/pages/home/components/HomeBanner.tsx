
import { FC } from "react";

export const HomeBanner: FC = () => {
    return (
        <div className=" bg-[#5928e5] h-32">
            <div className=" flex flex-col max-w-[1080px] mx-auto">

                <div className=" flex justify-between pt-1 text-white px-3">
                    <div>
                        <h3 className="text-sm">
                            {new Date().toLocaleDateString("en-AU", {weekday: "long", day: "numeric", month: "short", year: "numeric"})}
                        </h3>
                    </div>

                    <div>
                        <h3>Log In</h3>
                    </div>
                    
                </div>

                <div className=" flex jusfity-center pt-2">
                    <h1 className=" text-3xl text-white font-bold mx-auto relative top-10">The Best Blog</h1>
                </div>

            </div>
        </div>
    );
}