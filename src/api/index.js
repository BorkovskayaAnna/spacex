export const fetchData = async({pageNumber, searchTerm}) => {
    const limit = 10
    const url = "https://api.spacexdata.com/v4/launches/query";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "query": searchTerm ? {
                    "$text": {
                        "$search": searchTerm
                    },
                } : {},
                "options": {
                    "sort":{
                        "name": "asc"
                    },
                    "offset": (pageNumber -1) * limit,
                    "limit": limit,
                    "pagination" : true
                },
            }
        )
    }

    const res = await fetch(url, options);
    return res.json();
}