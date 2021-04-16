const url = "https://api.spacexdata.com/v4/launches/query";

const limit = 10
const offset = 0
const page = 1
const search = ''

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(
        {
            "query": {
                // "$text": {
                //     "$search": "Eute"
                // },
                // "upcoming": true
            },
            "options": {
                "sort":{
                    "name": "asc"
                },
                "page" : page,
                "offset": 0,
                "limit": limit,
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
    // console.log(data)

    return data;
}

