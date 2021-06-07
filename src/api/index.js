const { REACT_APP_BASE_API_URL, REACT_APP_CARDS_PER_PAGE } = process.env;

export const fetchData = async (
    currentPage,
    query
  ) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
      {
        query,
        "options": {
          "sort": {
            "name": "asc"
          },
          "offset": (currentPage - 1) * REACT_APP_CARDS_PER_PAGE,
          "limit": REACT_APP_CARDS_PER_PAGE,
          "pagination": true
        },
      }
    )
  }
  const res = await fetch(REACT_APP_BASE_API_URL, options);
  return res.json();
}