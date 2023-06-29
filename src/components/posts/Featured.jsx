import { Avatar } from "@mui/material";

export const FeaturedPost = ({ post }) => {
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
