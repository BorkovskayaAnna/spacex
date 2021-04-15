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
                //     "$search": "crs"
                // },
                // "upcoming": true
            },
            "options": {
                "sort":{
                    "name": "asc"
                },
                "page" : 1,
                "offset": 0,
                "limit": 10,
                "pagination" : true
            },
            // "populate": [
            //     "payloads",
            //     "capsules",
            //     "ships"
            // ],
        }
    )
}

export const fetchData = async() => {
    const res = await fetch(url, options);

    let data = await res.json();
    console.log(data)

    return data;
}

