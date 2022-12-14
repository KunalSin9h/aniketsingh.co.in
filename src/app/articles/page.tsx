"use client"

import { getAllArticles } from "../../lib/getArticles";
import { cantoBold } from "../../lib/fontsCanto";
import type { Article } from "../../lib/getArticles";
import ArticleCart from "../../components/ArticleCard";
import Link from "next/link";
import {use} from "react"

export default function ArticlePage() {
  const articles: Article[] = use(getAllArticles());
  if (articles.length === 0) return null;
  return (
    <>
      <p className={`${cantoBold.className} m-2 p-2 text-4xl md:text-5xl`}>
        All Articles
      </p>
      <div className="ml-8 md:ml-10">
        <Link href="/">
          <button className="mb-2 underline-offset-8 hover:underline">
            &larr; Back to home
          </button>
        </Link>
      </div>
      <div className="mx-8 md:mx-10">
        {articles.map((art: Article, i: number) => {
          return (
            <ArticleCart
              key={i}
              title={art.Title}
              slug={art.Slug}
              date={art.Date}
              desc={art.Description}
            />
          );
        })}
      </div>
    </>
  );
}
