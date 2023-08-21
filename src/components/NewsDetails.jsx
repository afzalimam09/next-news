import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { addToFavorite, formatTime, removeFromFavorite } from "@/utils";

const NewsDetails = ({ isOpen, closeModal, news, type }) => {
    const {
        title,
        content,
        source,
        description,
        url,
        urlToImage,
        author,
        publishedAt,
    } = news;

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-out duration-300"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button
                                        type="button"
                                        className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                        onClick={closeModal}
                                    >
                                        <Image
                                            src="/close.svg"
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </button>

                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="relative w-full h-64 rounded-lg">
                                            <Image
                                                src={
                                                    urlToImage
                                                        ? urlToImage
                                                        : "https://flowbite.com/docs/images/blog/image-1.jpg"
                                                }
                                                alt="news model"
                                                fill
                                                priority
                                                className="object-contain"
                                            />
                                        </div>

                                        <div className="flex justify-between">
                                            <Link
                                                target="_blank"
                                                href={url}
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Read News
                                            </Link>
                                            {type === "/" ? (
                                                <button
                                                    onClick={() =>
                                                        addToFavorite(news)
                                                    }
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    🤍
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        removeFromFavorite(news)
                                                    }
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    Remove 🤍
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col gap-2">
                                        <h2 className="font-semibold text-xl capitalize">
                                            {title}
                                        </h2>

                                        <div className="flex items-center justify-between">
                                            <div className="text-grey">
                                                <span className="font-bold">
                                                    By:{" "}
                                                </span>
                                                <span>
                                                    {author ?? source.name}
                                                </span>
                                            </div>
                                            <div className="text-grey">
                                                <span className="font-bold">
                                                    Date:{" "}
                                                </span>
                                                <span>
                                                    {formatTime(publishedAt)}
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-lg">
                                                Description:{" "}
                                            </h3>{" "}
                                            <p className="mt-2">
                                                {description || "NA"}
                                            </p>{" "}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">
                                                Content:{" "}
                                            </h3>{" "}
                                            {content ? (
                                                <p className="mt-2">
                                                    {content?.split("[+")[0]}
                                                    {content?.split(
                                                        "[+"
                                                    )[1] && (
                                                        <span className="text-primary-blue">
                                                            <Link
                                                                href={url}
                                                                target="_blank"
                                                            >
                                                                {" " +
                                                                    content?.split(
                                                                        "[+"
                                                                    )[1]}
                                                            </Link>
                                                        </span>
                                                    )}
                                                </p>
                                            ) : (
                                                "NA"
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default NewsDetails;
