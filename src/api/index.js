export const fetchData = async({pageNumber, searchTerm, upcoming, success}) => {
    const limit = 10
    const url = "https://api.spacexdata.com/v4/launches/query";

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                // "query": searchTerm ? {
                //     "$text": {
                //         "$search": searchTerm
                //     },
                // } : {},

                // "query": searchTerm ? {
                //     "$text": {
                //         "$search": searchTerm,
                //         "$caseSensitive": false,
                //         "$diacriticSensitive": false
                //         },
                //     } : upcoming || success ? {
                //         "upcoming": upcoming,
                //         "success": success,
                //     } : {},

                "query": searchTerm || upcoming || success ? {
                    "$text": searchTerm && {
                        "$search": searchTerm,
                        "$caseSensitive": false,
                        "$diacriticSensitive": false
                    },
                    "upcoming": upcoming,
                    "success": success,
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
    // console.log(`
    // ${searchTerm}
    // ${upcoming}
    // ${success}
    // `)
    return res.json();
}