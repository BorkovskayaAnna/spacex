export const fetchData = async ({
  pageNumber,
  searchTerm,
  upcoming,
  success,
}) => {
  const limit = 9;
  // url и limit нужно было вынести в .env файл и там хранить разные переменые которые могут поменятся и не нужно будет их искать по всему проекту
  const url = "https://api.spacexdata.com/v4/launches/query";

  const query = {};

  // такие проверки в dataService не желательно делать так как функцыя должно отправлять запрос, лучше эту проверку делать вне функции и сюда прокидывать нужные параметры, если этот запрос нужно будет использовать в другом месте там таких данных может не быть и она тогда становиться привязана только к этим параметрам
  if (upcoming !== "all") {
    query.upcoming = upcoming === "true";
  }

  if (success !== "all") {
    query.success = success === "true";
  }

  if (searchTerm) {
    query["$text"] = {
      $search: searchTerm,
      $caseSensitive: false,
      $diacriticSensitive: false,
    };
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      options: {
        sort: {
          name: "asc",
        },
        offset: (pageNumber - 1) * limit,
        limit: limit,
        pagination: true,
      },
    }),
  };

  const res = await fetch(url, options);

  return res.json();
};
