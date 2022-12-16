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
    })


    return (
        <div className=" px-1">

            <h1 className=" text-center mt-5 text-xl font-bold">Delete posts</h1>

            <div className="relative top-12 border-[1px] border-gray-200 max-w-[1080px] mx-auto">

                <div className=" flex flex-col">
                {
                    allPosts.map((article, i) => {
                        return (
                            <div key={i} className="px-5 flex my-1 mx-[8px] border-b-[1px] border-gray-200">
                                <h1>{article.title}</h1>
                                <p>{article.id}</p>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
    )
}