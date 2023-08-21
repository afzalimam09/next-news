import NewsCard from "@/components/NewsCard";
import { fetchAllNews } from "@/utils";
import React from "react";

const Favorite = async ({ searchParams }) => {
    const allNews = await fetchAllNews({
        pageSize: searchParams.pageSize || 10,
        category: searchParams.category || "",
        country: searchParams.country || "IN",
        q: searchParams.q || "",
    });

    const isDataEmpty =
        !Array.isArray(allNews?.articles) ||
        allNews?.totalResults < 1 ||
        !allNews;
    return (
        <div className="container mt-8 mb-12 sm:my-12">
            <div className="mb-5 sm:mb-0">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    Your Favorites
                </h1>
                <p>Wow, Read your favorites news again!</p>
            </div>
            {!isDataEmpty ? (
                <div className="mt-6 mb-12 sm:my-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {allNews?.articles.map((item) => (
                        <NewsCard news={item} type={"/favorite"} />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-16">
                    <h2 className="text-black text-xl font-bold">
                        Oops, You don't have any favorite.
                    </h2>
                    <p>{allNews?.message}</p>
                </div>
            )}
        </div>
    );
};

export default Favorite;
