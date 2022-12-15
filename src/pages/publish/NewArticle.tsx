
import { ServerInfo } from "../../shared/ServerInfo";

type ResponseMessage = {
    status: string
}

export const NewArticle = () => {

    const HandleNewArticleSubmit = async (e: any) => {

        await PostNewArticle({
            title: e.target.title.value, 
            content: e.target.content.value,
            snippet: e.target.snippet.value,
            author: e.target.author.value,
            publish_date: new Date()
        });

        console.log("New article submitted");
    }


    const PostNewArticle = async (NewArticleObject: object) => {
        // because it's async
        try {   

            const response = await fetch(`${ServerInfo.DEV_DOMAIN}/new-article`, {
                method: "POST", // HTTP method
                headers: {"Content-Type": "application/json"},  // the type of data sent
                body: JSON.stringify(NewArticleObject)  // converts object to JSON
            })

            // checking it worked
            let responseMessage: ResponseMessage = await response.json();
            console.log(responseMessage.status);

        } catch (e: any) {
            console.error(e.message);
        }
    }


    return (
        <div className=" flex flex-col items-center py-10 text-xl max-w-[1080px] mx-auto">

            <h1 className="font-bold mb-5">Publish a new article</h1>

            <form onSubmit={HandleNewArticleSubmit} className=" w-full flex flex-col items-center border-[1px] py-5 px-2">

                <label htmlFor="title">Title</label>
                <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm text-[1rem]" 
                />

                <label htmlFor="content">Content</label>
                <textarea 
                    id="content" 
                    name="content"  
                    className=" w-full h-32 mb-5 bg-gray-100 shadow rounded-sm text-sm" 
                />

                <label htmlFor="snippet">Snippet</label>
                <input 
                    id="snippet" 
                    name="snippet" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm text-[1rem]" 
                />

                <label htmlFor="author">Author</label>
                <input 
                    id="author" 
                    name="author" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm text-[1rem]" 
                />

                <button 
                    type="submit"
                    className=" text-sm bg-gray-200 border-[1px] border-black px-2 py-1 rounded-md text-[1rem]"
                >
                    Submit
                </button>

            </form>
        </div>
    )
}