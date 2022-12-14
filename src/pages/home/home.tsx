
import { LatestArticles } from "./components/LatestArticles";
import { TrendingArticles } from "./components/TrendingArticles";
import { useEffect, useState } from 'react';
import { ServerInfo } from "../../shared/ServerInfo";
import { ArticleType } from "../../shared/ArticleSnippet";


export function Home() {
    const [serverStatus, setServerStatus] = useState("");


    const CheckServerConnection = async () => {
        try {

            const response = await fetch(`${ServerInfo.DEV_DOMAIN}/home-test`, {
                method: "GET",
            });

            const responseJSON = await response.json();
            setServerStatus(responseJSON.message);
            console.log("Server status retrieved");

        } catch (e: any) {
            console.error(e.message);
        }
    }


    const [allPosts, setAllPosts] = useState<ArticleType[]>([]);


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
        CheckServerConnection();
        GetAllPosts();
    }, []);

    return (
        <div className=" flex flex-col items-center w-full max-w-[1080px] mx-auto">

            <p className=" my-5 p-1 border-red-600 border-[1px]">
                Server status: {serverStatus ? serverStatus : "Not found"}
            </p>

            <h1 className="text-bold text-xl py-10">
                My Blog!
            </h1>

            <div className=" py-10">
                <span>Trending Articles</span>
            </div>

            <TrendingArticles Articles={allPosts} />

            <div className=" py-10">
                <span>Latest Articles</span>
            </div>

            <LatestArticles Articles={allPosts} />

        </div>
    );
}