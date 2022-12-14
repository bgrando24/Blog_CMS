import { useEffect, useState } from 'react';
import { ServerInfo } from '../../shared/ServerInfo';


export function Blog() {

    const [allPosts, setAllPosts] = useState<any[]>([]);


    const GetAllPosts = async () => {
        try {

            const response = await fetch(`${ServerInfo.DEV_DOMAIN}/blog-posts`, {
                method: "GET",
            });

            const responseJSON = await response.json();
            setAllPosts(responseJSON);
            console.log("All posts retrieved");
            console.log(responseJSON);

        } catch (e: any) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        GetAllPosts();
        console.log("GetAllPosts triggered");
    }, []);





    return (
        <div className=" flex flex-col items-center justify-between h-[70vh] max-w-[1080px] mx-auto">

            <div className="py-10">
                <h1>Search</h1>
            </div>

            <div className="py-10">
                <h1>Categories</h1>
            </div>

            <div>
                <h1 className=' text-center mb-3'>All Articles</h1>
                <div className="flex">
                    {
                        allPosts.map( (post, i) => {
                            return (
                                <div key={i} className="flex flex-col items-center border-black border-[1px] w-full py-1 px-2 m-1 rounded-sm">
                                    <h3 className=' font-bold'>{post.title}</h3>
                                    <p>{post.snippet}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}