
export const NewArticle = () => {
    return (
        <div className=" flex flex-col items-center py-10 text-xl max-w-[1080px] mx-auto">

            <h1 className="font-bold mb-5">Publish a new article</h1>

            <form className=" w-full flex flex-col items-center border-[1px] py-5 px-2">

                <label htmlFor="title">Title</label>
                <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm" 
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
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm" 
                />

                <label htmlFor="author">Author</label>
                <input 
                    id="author" 
                    name="author" 
                    type="text" 
                    className="w-[50%] mb-5 bg-gray-100 shadow rounded-sm" 
                />
            </form>
        </div>
    )
}