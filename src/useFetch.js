import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(endPoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/${endPoint}`)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
