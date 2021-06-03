const { REACT_APP_BASE_API_URL, REACT_APP_CARDS_PER_PAGE } = process.env;

export const fetchData = async ({
    pageNumber,
    searchTerm,
    upcoming,
    success
}) => {

  const query = {}

  if (upcoming !== 'all') {
    query.upcoming = upcoming === 'true'
  }

  if (success !== 'all') {
    query.success = success === 'true'
  }

  if (searchTerm) {
    query["$text"] = {
      $search: searchTerm,
      $caseSensitive: false,
      $diacriticSensitive: false,
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
          "sort": {
            "name": "asc"
          },
          "offset": (pageNumber - 1) * REACT_APP_CARDS_PER_PAGE,
          "limit": REACT_APP_CARDS_PER_PAGE,
          "pagination": true
        },
      }
    )
  }
  const res = await fetch(REACT_APP_BASE_API_URL, options);
  return res.json();
}