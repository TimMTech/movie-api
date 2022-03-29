import { useState, useEffect } from "react";

const useFetchInfo = () => {
  const [id, setId] = useState("");
  const [info, setInfo] = useState([]);
  const [loadingContent, setLoadingContent] = useState(false)

  const getInfo = async (id) => {
    setLoadingContent(true)
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=216e5a9d`
    );
    const movieInfoJson = await response.json();
    if (movieInfoJson.Response === "False") {
      setLoadingContent(true);
    } else {
      setInfo(movieInfoJson);
      setLoadingContent(false)
    }
  };

  useEffect(() => {
    if (id === "") {
        setLoadingContent(false)
        setInfo([])
        return
    }
    getInfo(id);
  }, [id]);

  return { info, id, setId, loadingContent };
};

export default useFetchInfo;
