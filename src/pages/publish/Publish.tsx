
export const Publish = () => {
    return (
        <div className=" flex flex-col items-center">

            <div className=" my-10">
                Publications
            </div>

            <div className=" flex justify-center w-full">
                <a 
                    href="/publish/new-article"
                    className=" border-[1px] border-black rounded p-1 bg-blue-400 text-md hover:opacity-75 transform hover:scale-105 transition duration-200"
                >
                    New article 
                </a>
            </div>

        </div>
    )
}