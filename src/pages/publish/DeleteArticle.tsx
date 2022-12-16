import { useEffect, useState } from "react";
import { ArticleType } from "../../shared/ArticleSnippet";
import { ServerInfo } from "../../shared/ServerInfo";

export const DeleteArticle = () => {

    const [allPosts, setAllPosts] = useState<ArticleType[]>([]);

    const GetAllPosts = async () => {
        try {

            const response = await fetch(`${ServerInfo.DEV_DOMAIN}/blog-posts`, {
                method: "GET",
            });

            const responseJSON = await response.json();
            setAllPosts(responseJSON);

        } catch (e: any) {
            console.error(e.message);
        }
    }


    useEffect(() => {
        GetAllPosts();
    }, [])


    // sends the delete request to the server
    const DeleteArticle = async (e: any) => {
        try {

            const response = await fetch(`${ServerInfo.DEV_DOMAIN}/delete/${e.target.value}`, {
                method: "delete"
            })

            const returnedPosts = await response.json();
            setAllPosts(returnedPosts);

        } catch (e: any) {
            console.error(e.message);
        }
    }



    return (
        <div className=" px-2">

            <h1 className=" text-center mt-5 text-xl font-bold">Delete posts</h1>

            <div className="relative top-12 max-w-[1080px] mx-auto">

                <div className=" flex flex-col">
                {
                    allPosts.map((article, i) => {
                        return (
                            <div key={i} className=" grid grid-cols-2 my-1 pb-2 border-b-[1px] border-gray-200">

                                <div key={i} className=" flex justify-center items-center text-center">
                                    <h1>{article.title}</h1>
                                    {/* <p>{article.id}</p>     */}
                                </div>

                                <div className="flex justify-center items-center">
                                    <button 
                                        type="button" 
                                        className=" text-white bg-[#f44336] border-gray-500 border-[1px] px-2 rounded"
                                        value={article.id}
                                        onClick={DeleteArticle}
                                        >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}