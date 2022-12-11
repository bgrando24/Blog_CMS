
import { Articles } from "../../FakeDatabase";
import { ArticleSnippet } from "./components/ArticleSnippet";
import { LatestArticles } from "./components/LatestArticlesSection";

export function Home() {
    return (
        <div className=" flex flex-col items-center w-full max-w-[1080px] mx-auto">

            <h1 className="text-bold text-xl py-10">
                My Blog!
            </h1>

            <div className=" py-5">
                <span>Latest Articles</span>
            </div>

            <LatestArticles Articles={Articles} />


            {/* <ArticleSnippet article={Articles[1]}/> */}

        </div>
    );
}