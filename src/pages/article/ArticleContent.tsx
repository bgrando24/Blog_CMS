import { FC } from "react";
import { Articles } from "../../FakeDatabase";
import { ArticleType } from "../home/components/ArticleSnippet";


// Note this fakes querying, it simply takes an array and finds the appropriate member
const QueryDatabaseForArticle = (Database: Array<ArticleType>, IDToFind: string): Array<ArticleType>  => {
    let filteredResult: Array<ArticleType> = Database.filter( article => article.ID === IDToFind);

    return filteredResult;
}

const queryString = window.location.pathname;
const ArticleID = queryString[queryString.length-1];
console.log("The article ID should be: " + ArticleID);


const ArticleResult: Array<ArticleType> = QueryDatabaseForArticle(Articles, ArticleID);

export const ArticleContent: FC = (): JSX.Element => {


    let Article = ArticleResult[0];

    return (
        <div className=" flex flex-col items-center max-w-[1080px] mx-auto mb-20 px-5">

            <h2 className=" text-3xl py-10 text-center">{Article.Title}</h2>

            <div className=" flex flex-col">
                {/* socials? */}
                <h3 className=" text-center font-bold">{Article.Author}</h3>
                <p className=" text-center">
                    {`Published ${CalculateTimeSincePublished(Article.Date)} : `}
                    <span className=" text-gray-500">{`${Article.Date.toDateString()}`}</span>
                </p>

                <p className=" my-10"> {Article.Content} </p>
                
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
