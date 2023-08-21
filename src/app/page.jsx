import CustomFilter from "@/components/CustomFilter";
import NewsCard from "@/components/NewsCard";
import ShowMore from "@/components/ShowMore";
import { categories, countries } from "@/constant";
import { fetchAllNews } from "@/utils";
import React from "react";

const Home = async ({ searchParams }) => {
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
            <div className="sm:flex items-center justify-between">
                <div className="mb-5 sm:mb-0">
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                        Top HeadLines
                    </h1>
                    <p>Get the latest headlines just at one place</p>
                </div>
                <div className="flex gap-5">
                    <CustomFilter title="category" options={categories} />
                    <CustomFilter title="country" options={countries} />
                </div>
            </div>
            {!isDataEmpty ? (
                <>
                    <div className="mt-6 mb-12 sm:my-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {allNews?.articles.map((item) => (
                            <NewsCard news={item} type={"/"} />
                        ))}
                    </div>
                    <ShowMore
                        pageNumber={(searchParams.pageSize || 10) / 10}
                        isNext={
                            (searchParams.pageSize || 10) >
                            allNews?.totalResults
                        }
                    />
                </>
            ) : (
                <div className="text-center mt-16">
                    <h2 className="text-black text-xl font-bold">
                        Oops, no results
                    </h2>
                    <p>{allNews?.message}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
