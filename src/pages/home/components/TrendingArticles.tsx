
import { FC } from "react";
import { ArticleSnippet } from "../../../shared/ArticleSnippet";
import { ArticlesProps } from "./LatestArticles";

export const TrendingArticles: FC<ArticlesProps> = ({ Articles }): JSX.Element => {


    return (
        <div className=" flex justify-center flex-wrap p-5 w-full border-y-[1px] border-gray-200">

            {
                Articles.map( (article, i) => {
                    return (
                        <div key={i}>
                            <ArticleSnippet article={article} />
                        </div>
                    )
                })
            }
            

        </div>
    );
}