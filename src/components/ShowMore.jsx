"use client";

import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }) => {
    const router = useRouter();

    const handleNavigation = () => {
        // Calculate the new limit based on the page number and navigation type
        const newLimit = (pageNumber + 1) * 10;

        // Update the "limit" search parameter in the URL with the new value
        const newPathname = updateSearchParams("pageSize", `${newLimit}`);

        router.push(newPathname);
    };

    return (
        <div className="text-center">
            {!isNext && (
                <button
                    type="button"
                    onClick={handleNavigation}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Show More
                </button>
            )}
        </div>
    );
};

export default ShowMore;
