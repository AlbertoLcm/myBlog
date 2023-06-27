import { Fragment, useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Slidebar } from "../components/posts/Slidebar";
import { Suscription } from "../components/Suscription";
import { Post } from "../components/posts/Post";
import "../App.css";

const AllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState({ data: [], info: {} });
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const postsRef = useRef();

  useEffect(() => {
    searchParams.has("page") && setPage(Number(searchParams.get("page")));
    setLoading(true);
    axios
      .get(`https://my-api.fly.dev/posts?page=${page}`)
      .then((res) => setResponse(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [page]);

  const renderPosts = () => {
    if (!response.data.length) return <h1>No hay articulos</h1>;
    return response.data.map((post) => <Post post={post} key={post.id} />);
  };

  if (loading) return <CircularProgress color="secondary" />;

  return (
    <Fragment>
      <Slidebar />
      {loading && <CircularProgress color="secondary" />}
      <div className="container__posts" ref={postsRef}>
        {renderPosts()}
      </div>
      <div className="container-pagination">
        <Pagination
          count={response.info.totalPages}
          page={page}
          size="large"
          onChange={(event, page) => {
            page === 1 ? setSearchParams() : setSearchParams({ page });
            postsRef?.current?.scrollIntoView({ behavior: "smooth" });
            setPage(page);
          }}
        />
      </div>
    </Fragment>
  );
};

const TagPosts = () => {
  const { tag } = useParams();
  return <h1>Tag {tag}</h1>;
};

function Home() {
  return (
    <Fragment>
      <div className="container">
        <section className="head">
          <div className="head__title">
            <h1>Descubre articulos geniales aquí</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium,
            </p>
          </div>
          <Navbar />
        </section>

        <div className="separator">
          <h2 className="subtitle">Articulos</h2>
        </div>

        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/tag/:tag" element={<TagPosts />} />
        </Routes>
      </div>

      <Suscription />
    </Fragment>
  );
}

export default Home;
