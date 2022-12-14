import { FC } from "react";
import { ArticleSnippet, ArticleType } from "../../../shared/ArticleSnippet";

export interface ArticlesProps {
    Articles: ArticleType[]
}

// When backend is running, this will need to query articles based on newest date - maybe top 10?

export const LatestArticles: FC<ArticlesProps> = ({Articles}): JSX.Element => {

    return (
        <div className=" flex justify-center flex-wrap mb-20 border-b-[1px] border-gray-200">
            {
                Articles.map( (article, i) => {
                    return (
                        <div className="m-2" key={i}>
                            <ArticleSnippet  article={article} />
                        </div>
                    )
                    
                })
            }
        </div>
    );
}