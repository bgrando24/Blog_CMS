import { useEffect, useState } from 'react';
import { ArticleSnippet } from '../../shared/ArticleSnippet';
import { ServerInfo } from '../../shared/ServerInfo';
import { Search } from './Search';


export function Blog() {

    const [allPosts, setAllPosts] = useState<any[]>([]);


    const GetAllPosts = async () => {
        try {

            const response = await fetch(`${ServerInfo.PROD_DOMAIN}/blog-posts`, {
                method: "GET",
            });

            const responseJSON = await response.json();
            setAllPosts(responseJSON);
            console.log("All posts retrieved");
            // console.log(responseJSON);

        } catch (e: any) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        GetAllPosts();
    }, []);





    return (
        <div className=" flex flex-col items-center justify-between h-[70vh] max-w-[1080px] mx-auto">

            <div className="py-10">
                <Search />
            </div>

            <div className="py-10">
                <h1>Categories</h1>
            </div>

            <div>
                <h1 className=' text-center mb-3'>All Articles</h1>
                <div className="flex flex-col">
                    {
                        allPosts.map( (post, i) => {
                            return (
                                <div className='my-1' key={i}>
                                    <ArticleSnippet article={post} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    );
}