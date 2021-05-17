export const fetchData = async({pageNumber, searchTerm, upcoming, success}) => {
    const limit = 9
    const url = "https://api.spacexdata.com/v4/launches/query";

    const query = {}

    if(upcoming !== 'all'  ) {
        query.upcoming = upcoming === 'true'
    }

    if(success !== 'all' ) {
        query.success = success === 'true'
    }

    if(searchTerm) {
        query["$text"] = {
            "$search": searchTerm,
            "$caseSensitive": false,
            "$diacriticSensitive": false
        }
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                query,
                "options": {
                    "sort":{
                        "name": "asc"
                    },
                    "offset": (pageNumber - 1) * limit,
                    "limit": limit,
                    "pagination" : true
                },
            }
        )
    }

    const res = await fetch(url, options);
    return res.json();
}