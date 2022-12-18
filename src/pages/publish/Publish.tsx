
export const Publish = () => {
    return (
        <div className=" flex flex-col items-center">

            <div className=" my-10">
                Publications
            </div>

            <div className=" flex flex-col items-center w-full">
                <a 
                    href="/publish/new-article"
                    className=" border-[1px] border-black rounded p-1 mb-3 bg-primary text-white text-md hover:opacity-75 transform hover:scale-105 transition duration-200"
                >
                    New article
                </a>

                <a
                    href="/publish/delete"
                    className=" border-[1px] border-black rounded p-1 bg-warning text-md hover:opacity-75 transform hover:scale-105 transition duration-200"
                >
                    Delete an article
                </a>
            </div>

        </div>
    )
}