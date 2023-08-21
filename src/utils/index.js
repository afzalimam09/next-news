export const fetchAllNews = async (filters) => {
    const { pageSize, category, country, q } = filters;
    const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const finalCategory = category ? `&category=${category}` : "";
    const finalQuery = q ? `&q=${q}` : "";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}${finalCategory}${finalQuery}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
};

export function formatTime(timestamp) {
    const date = new Date(timestamp);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return date.toLocaleString("en-US", options);
}

export const updateSearchParams = (type, value) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${
        window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname;
};

export const deleteSearchParams = (type) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);

    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());

    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${
        window.location.pathname
    }?${newSearchParams.toString()}`;

    return newPathname;
};

export const addToFavorite = (news) => {
    console.log("add: ", news.url);
};
export const removeFromFavorite = (news) => {
    console.log("remove: ", news.url);
};
