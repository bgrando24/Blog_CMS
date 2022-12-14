import { FC, useState, useEffect } from "react";
import { ArticleType } from "../../shared/ArticleSnippet";
import { ServerInfo } from "../../shared/ServerInfo";


const queryString = window.location.pathname;
const ArticleID = queryString[queryString.length-1];

export const ArticleContent: FC = (): JSX.Element => {

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
            console.log(responseJSON);

        } catch (e: any) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        getArticleById();
    }, []);

    const dateStringToDate: Date = new Date(Article.publish_date);

    return (
        <div className=" flex flex-col items-center max-w-[1080px] mx-auto mb-20 px-5">

            <h2 className=" text-3xl py-10 text-center">{Article.title}</h2>

            <div className=" flex flex-col">
                {/* socials? */}
                <h3 className=" text-center font-bold">{Article.author}</h3>
                <p className=" text-center">
                    {`Published ${CalculateTimeSincePublished(dateStringToDate)} : `}
                    <span className=" text-gray-500">{`${dateStringToDate.toDateString()}`}</span>
                </p>

                <p className=" my-10"> {Article.content} </p>
                
            </div>

        </div>
    );
}


const CalculateTimeSincePublished = (publishDate: Date): string => {
    let hour: number = 1000 * 60 * 60;

    let currentTime: any = new Date();
    let difference = currentTime.getTime() - publishDate.getTime();
     if (difference/hour > 24) {
        return `${Math.round(difference/hour/24)} days ago`;
     }
     else if (difference/hour < 1) {
        return "today";
     }

     return `${Math.round(difference/hour)} hours ago`;
}
