"use client";
import Link from "next/link";
import React, { useState } from "react";
import NewsDetails from "./NewsDetails";
import { addToFavorite, removeFromFavorite } from "@/utils";

const NewsCard = ({ news, type }) => {
    const { title, content, description, url, urlToImage } = news;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {type === "/" ? (
                <button
                    onClick={() => addToFavorite(news)}
                    type="button"
                    className="absolute top-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-3 focus:ring-blue-300 font-medium rounded-full text-lg px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    🤍
                </button>
            ) : (
                <button
                    onClick={() => removeFromFavorite(news)}
                    type="button"
                    className="absolute top-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    x
                </button>
            )}
            <img
                className="rounded-t-lg"
                src={
                    urlToImage
                        ? urlToImage
                        : "https://flowbite.com/docs/images/blog/image-1.jpg"
                }
                alt="news-image"
            />
            <div className="p-5">
                <Link href={url}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title?.substring(0, 60) + "..."}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description
                        ? description?.substring(0, 99)
                        : content
                        ? content?.substring(0, 99)
                        : "Description not available" + "..."}
                </p>
                <div className="flex justify-between">
                    <Link
                        target="_blank"
                        href={url}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read News
                    </Link>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Details View
                    </button>
                </div>
            </div>

            <NewsDetails
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                news={news}
                type={type}
            />
        </div>
    );
};

export default NewsCard;
