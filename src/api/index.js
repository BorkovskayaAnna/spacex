

export const fetchData = async({pageNumber}) => {
    const limit = 10
    const search = ''
    const url = "https://api.spacexdata.com/v4/launches/query";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "query": {
                    // "$text": {
                    //     "$search": search
                    // },
                    // "upcoming": true
                },
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
    //console.log(data)
    // return data;
}