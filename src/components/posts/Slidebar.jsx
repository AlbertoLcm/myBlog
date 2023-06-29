import { useEffect, useState } from "react";
import { EffectCoverflow, Pagination as PagSwiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CircularProgress } from "@mui/material";
import { FeaturedPost } from "./Featured";
import axios from "axios";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

export function Slidebar() {
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://my-api.fly.dev/posts/featured")
      .then((res) => setFeatured(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress color="secondary" />;

  if (!featured.length) return <h2>Parece que no hay articulos destacados</h2>;

  return (
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
        {featured.map((post) => (
          <SwiperSlide key={post.id}>
            <FeaturedPost post={post} />
          </SwiperSlide>
        ))}

        <div className="pagination__Swiper">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}
