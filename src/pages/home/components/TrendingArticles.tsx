
import { FC } from "react";
import { ArticleSnippet } from "./ArticleSnippet";
import { ArticlesProps } from "./LatestArticles";

export const TrendingArticles: FC<ArticlesProps> = ({ Articles }): JSX.Element => {
    return (
        <div className=" flex justify-center p-5 w-full border-y-[1px] border-gray-200">

            <ArticleSnippet article={Articles[1]} />

        </div>
    );
}