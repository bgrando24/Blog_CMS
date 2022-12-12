import { FC } from "react";

// the length in characters an article snippet should be
const SNIPPET_LENGTH: number = 50;


// defines the type of each property of an Article object
export type ArticleType = {
    ID: string,
    Title: string,
    Content: string,
    Author: string,
    Date: Date
}

// tells typescript below to expect a property called 'article' that is of the type above
export interface ArticleProps {
    article: ArticleType
}


// here we declare ArticleSnippet is of type Functional Component cast to ArticleProps
export const ArticleSnippet: FC<ArticleProps> = ({ article }): JSX.Element => {

    let contentSnippet: string = ArticleContentSnippet(article.Content);

    return (
        <a 
            className=" flex flex-col items-center justify-between h-40 w-[335px] bg-blue-200 p-2 rounded-xl hover:bg-opacity-50 transition duration-150 ease-in-out"
            href={"blog/" + article.ID}
        >

            <h3 className=" font-bold ">{article.Title}</h3>
            <p className=" text-sm text-center ">{contentSnippet}</p>
            <p className=" text-sm font-bold italic">By {article.Author}</p>
            <p className=" text-sm">{article.Date.toDateString()}</p>
            
        </a>
    );
}


function ArticleContentSnippet(content: string) {
    if (content.length > SNIPPET_LENGTH) {
        return content.substring(0, SNIPPET_LENGTH) + "...";
    }

    return content;
}
