import { FC } from "react";
import { ArticleSnippet, ArticleType } from "../../../shared/ArticleSnippet";

export interface ArticlesProps {
    Articles: ArticleType[]
}

// When backend is running, this will need to query articles based on newest date - maybe top 10?

export const LatestArticles: FC<ArticlesProps> = ({Articles}): JSX.Element => {

    return (
        <div className=" flex flex-col mb-20">
            {
                Articles.map( (article, i) => {
                    return (
                        <a href={`/blog/${article.id}`} className="mb-[8px] border-b-[1px] border-gray-200" key={i}>
                            <h2 className=" font-bold"> <span>{i + 1}</span> - {article.title}</h2>
                            <p className="text-sm">{new Date(article.publish_date).toLocaleDateString()}</p>
                        </a>
                    )
                    
                })
            }
        </div>
    );
}