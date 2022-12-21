import { useEffect, useState } from "react";
import { ArticleType } from "../../shared/ArticleSnippet";
import { ServerInfo } from "../../shared/ServerInfo";


export const EditArticlesPage = () => {

    // stores all the articles after the fetch request
    const [allPosts, setAllPosts] = useState<ArticleType[]>([]);

    // fetches all posts from backend
    const GetAllPosts = async () => {
        try {

            const response = await fetch(`${ServerInfo.PROD_DOMAIN}/blog-posts`, {
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


    return (
        <div className=" px-2">

            <h1 className=" text-center mt-5 text-xl font-bold">Edit posts</h1>

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
                                    <a 
                                        type="button" 
                                        className=" text-white bg-primary-alt border-gray-500 border-[1px] px-2 rounded"
                                        href={`/publish/edit/${article.id}`}
                                        >
                                        Edit
                                    </a>
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