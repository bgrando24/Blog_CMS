
import { LatestArticles } from "./components/LatestArticles";
import { TrendingArticles } from "./components/TrendingArticles";
import { useEffect, useState } from 'react';
import { ServerInfo } from "../../shared/ServerInfo";
import { ArticleType } from "../../shared/ArticleSnippet";


export function Home() {
    const [serverStatus, setServerStatus] = useState("");
    const [allPosts, setAllPosts] = useState<ArticleType[]>([]);
    const [latestPosts, setLatestPosts] = useState<ArticleType[]>([]);


    const CheckServerConnection = async () => {
        try {

            const response = await fetch(`${ServerInfo.PROD_DOMAIN}/home-test`, {
                method: "GET",
            });

            const responseJSON = await response.json();
            setServerStatus(responseJSON.message);
            console.log("Server status retrieved");

        } catch (e: any) {
            console.error(e.message);
        }
    }


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

    const GetLatestPosts = async () => {
        try {

            const response = await fetch(`${ServerInfo.PROD_DOMAIN}/latest-blog-posts`, {
                method: "GET",
            });

            const responseJSON = await response.json();
            setLatestPosts(responseJSON);

        } catch (e: any) {
            console.error(e.message);
        }
    }


    useEffect(() => {
        CheckServerConnection();
        GetAllPosts();
        GetLatestPosts();
    }, []);

    return (
        <div className=" flex flex-col items-center w-full max-w-[1080px] mx-auto">

            <p className=" my-5 p-1 border-red-600 border-[1px]">
                Server status: {serverStatus ? serverStatus : "Not found"}
            </p>

            <div className=" py-10">
                <h1 className=" text-lg">Trending Articles</h1>
            </div>

            <TrendingArticles Articles={allPosts} />

            <div className=" py-10">
                <h1 className=" text-lg">Latest Articles</h1>
            </div>

            <LatestArticles Articles={latestPosts} />

        </div>
    );
}