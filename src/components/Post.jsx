import { Avatar } from "@mui/material";
import moment from "moment";

export const Post = ({ post }) => {
  return (
    <article key={post.id} className="post">
      <div className="background">
        <img src={post.image} alt={post.title} className="image" />
        <div className="author">
          <Avatar
            alt={post.author.name}
            src={post.author.image}
            sx={{ width: 50, height: 50 }}
          />
          <p>{post.author.name}</p>
        </div>
      </div>
      <section className="content">
        <h2 className="title">{post.title}</h2>
        <p className="description">{post.description}</p>
        <div className="details">
          <p>
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1V4"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 1V4"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.5 8.08984H18.5"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 12.01V7.5C1 4.5 2.5 2.5 6 2.5H14C17.5 2.5 19 4.5 19 7.5V16C19 19 17.5 21 14 21H6C2.5 21 1 19 1 16"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6934 12.7H13.7024"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6934 15.7H13.7024"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99414 12.7H10.0031"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99414 15.7H10.0031"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.29492 12.7H6.3039"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.29492 15.7H6.3039"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {moment(post.date).format("LL")}
          </p>
          <p>
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1587 9.96195C15.1587 11.9855 13.5235 13.6206 11.5 13.6206C9.47651 13.6206 7.8414 11.9855 7.8414 9.96195C7.8414 7.93845 9.47651 6.30334 11.5 6.30334C13.5235 6.30334 15.1587 7.93845 15.1587 9.96195Z"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 18.4136C15.1076 18.4136 18.4699 16.2879 20.8102 12.6089C21.7299 11.1679 21.7299 8.7458 20.8102 7.30479C18.4699 3.6257 15.1076 1.5 11.5 1.5C7.89243 1.5 4.53014 3.6257 2.18983 7.30479C1.27006 8.7458 1.27006 11.1679 2.18983 12.6089C4.53014 16.2879 7.89243 18.4136 11.5 18.4136Z"
                stroke="#ffffff71"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {post.views}
          </p>
        </div>
        <a href="#" className="btnSeePost">Seguir leyendo</a>
      </section>
    </article>
  );
};

export const BigPost = ({ post }) => {
  return (
    <article key={post.id} className="post__big">
      <img src={post.image} alt={post.title} className="image-big-post" />
      <div className="content">
        <div className="author">
          <Avatar alt={post.author.name} src={post.author.image} />
          <p>{post.author.name}</p>
        </div>
        <h2 className="title">{post.title}</h2>
        <p className="description">{post.description}</p>
        <a href="#">Continuar leyendo...</a>
      </div>
    </article>
  );
};
