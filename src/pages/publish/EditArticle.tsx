
import { ServerInfo } from "../../shared/ServerInfo";
import { ResponseMessage } from "./NewArticle";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArticleType } from "../../shared/ArticleSnippet";


const queryString = window.location.pathname;
const ArticleID = queryString[queryString.length-1];

export const EditArticle = () => {

    const [Article, setArticle] = useState<ArticleType>({
        id: "",
        title: "",
        content: "",
        snippet: "",
        author: "",
        publish_date: new Date()
    });


    const getArticleById = async () => {
        try {

            const response = await fetch(`${ServerInfo.DEV_DOMAIN}/article/${ArticleID}`, {
                method: "POST"
            });

            const responseJSON = await response.json();
            setArticle(responseJSON);
            console.log(`Article with id ${ArticleID} retrieved`);

        } catch (e: any) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        getArticleById();
    }, []);

    const navigate = useNavigate();


    const HandleEditArticleSubmit = async (e: any) => {

        e.preventDefault();

        await EditArticleRequest({
            title: e.target.title.value, 
            content: e.target.content.value,
            snippet: e.target.snippet.value,
            author: e.target.author.value,
            publish_date: new Date()
        });

        console.log("New article submitted");
    }


    // send the PUT request to the server
    const EditArticleRequest = async (NewArticleObject: object) => {

        try {   

            const response = await fetch(`${ServerInfo.PROD_DOMAIN}/new-article`, {
                method: "PUT", // HTTP method
                headers: {"Content-Type": "application/json"},  // the type of data sent
                body: JSON.stringify(NewArticleObject)  // converts object to JSON
            })

            // checking it worked
            let responseMessage: ResponseMessage = await response.json();
            if (responseMessage.status === "ok") {
                navigate("/blog");
            }

        } catch (e: any) {
            console.error(e.message);
        }
    }



    return (
        <div className=" flex flex-col items-center py-10 text-xl max-w-[1080px] mx-auto">

            <h1 className="font-bold mb-5">Edit an article</h1>

            <form onSubmit={HandleEditArticleSubmit} className=" w-full flex flex-col items-center border-[1px] py-5 px-2">

                <label htmlFor="title">Title</label>
                <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm text-[1rem]" 
                    value={Article.title}
                />

                <label htmlFor="content">Content</label>
                <textarea 
                    id="content" 
                    name="content"  
                    className=" w-full h-32 mb-5 bg-gray-100 shadow rounded-sm text-sm"
                    value={Article.content} 
                />

                <label htmlFor="snippet">Snippet</label>
                <input 
                    id="snippet" 
                    name="snippet" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm text-[1rem]"
                    value={Article.snippet} 
                />

                <label htmlFor="author">Author</label>
                <input 
                    id="author" 
                    name="author" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm text-[1rem]"
                    value={Article.author} 
                />

                <button 
                    type="submit"
                    className=" text-sm bg-accent text-white border-[1px] border-black px-2 py-1 rounded-md text-[1rem]"
                >
                    Update
                </button>

            </form>
        </div>
    )
}