import { Fragment } from "react";
import { useParams } from "react-router-dom";

export function TagPosts() {
  const { tag } = useParams();
  
  return (
    <Fragment>
      <h1>Tag: {tag}</h1>
    </Fragment>
  );
}
