import { useEffect, useState } from "react";

const DEFAULT_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_ACCESS_TOKEN}`,
};

export default function useFetch(
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true },
) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (enabled) {
      const urlLink = `${import.meta.env.VITE_MOVIE_DB_API_HOST}${url}`;
      const options = {
        method,
        headers: {
          ...DEFAULT_HEADERS,
          ...headers,
        },
      };

      fetch(urlLink, options)
        .then(async (res) => {
          const data = await res.json();
          setData(data);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [url, method, JSON.stringify(headers)]);
  return { isLoading, data };
}
