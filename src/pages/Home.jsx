import { Fragment, useEffect, useRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "../App.css";
import { BigPost, Post } from "../components/Post";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Pagination from "@mui/material/Pagination";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
``;
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination as PagSwiper } from "swiper";
import { Navbar } from "../components/Navbar";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es requerido"),
});

function Home() {
  const [response, setResponse] = useState({ data: [], info: {} });
  const [featured, setFeatured] = useState(null);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const postsRef = useRef();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  useEffect(() => {
    params.has("page") && setPage(Number(params.get("page")));

    setLoading(true);
    axios
      .get(`https://my-api.fly.dev/posts?page=${page}`)
      .then((res) => setResponse(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    axios
      .get("https://my-api.fly.dev/posts/featured")
      .then((res) => setFeatured(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const renderPosts = () => {
    if (!response.data.length) return <h1>No hay articulos</h1>;
    return response.data.map((post) => <Post post={post} key={post.id} />);
  };

  if (loading) return <CircularProgress color="secondary" />;
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

        <section className="featured">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[EffectCoverflow, PagSwiper]}
            className="swiper_container"
          >
            {featured &&
              featured.map((post) => (
                <SwiperSlide key={post.id}>
                  <BigPost post={post} />
                </SwiperSlide>
              ))}
            <div className="pagination__Swiper">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </section>

        <section>
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
                page === 1 ? setParams() : setParams({ page });
                postsRef?.current?.scrollIntoView({ behavior: "smooth" });
                setPage(page);
              }}
            />
          </div>
        </section>
      </div>

      <div className="container__section">
        <section className="section__form">
          <div>
            <h2>Suscribete para nuevo contenido.</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <div>
                  <label htmlFor="email">Correo electrónico:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Suscribete
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </div>

      {/* <footer>
          <div>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>Services</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h1>My Blog</h1>
          </div>

          <div>2023 &copy; My Blog</div>
        </footer> */}
    </Fragment>
  );
}

export default Home;
