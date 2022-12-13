
import { FC } from "react";

export const HomeBanner: FC = () => {
    return (
        <div className=" bg-gray-600">
            <div className=" flex flex-col max-w-[1080px] mx-auto">

                <div className=" flex justify-between pt-1 text-white px-1">
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
                    <h1 className=" text-xl font-bold mx-auto pb-2">Logo</h1>
                </div>

            </div>
        </div>
    );
}