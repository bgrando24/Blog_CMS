import { FC, useEffect, useState } from "react";
import { ServerInfo } from "./ServerInfo";

// the length in characters an article snippet should be
const SNIPPET_LENGTH: number = 50;


// defines the type of each property of an Article object
export type ArticleType = {
    id: string,
    title: string,
    content: string,
    snippet: string
    author: string,
    publish_date: Date
}

// tells typescript below to expect a property called 'article' that is of the type above
export interface ArticleProps {
    article: ArticleType
}


// here we declare ArticleSnippet is of type Functional Component cast to ArticleProps
export const ArticleSnippet: FC<ArticleProps> = ({ article }): JSX.Element => {

    const dateStringAsDate: Date = new Date(article.publish_date);
    console.log(dateStringAsDate);

    return (
        <a 
            className=" flex flex-col items-center justify-between h-40 w-[335px] p-2 rounded-xl shadow hover:bg-opacity-50 transition duration-150 ease-in-out"
            href={"blog/" + article.id}
        >

            <h3 className=" font-bold ">{article.title}</h3>
            <p className=" text-sm text-center ">{article.snippet}</p>
            <p className=" text-sm font-bold italic">By {article.author}</p>
            <p className=" text-sm">{dateStringAsDate.toLocaleString("en-AU", {weekday: "long", day: "numeric", month: "short", year: "numeric"})}</p>
            
        </a>
    );
}


function ArticleContentSnippet(content: string) {
    if (content.length > SNIPPET_LENGTH) {
        return content.substring(0, SNIPPET_LENGTH) + "...";
    }

    return content;
}
