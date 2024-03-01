import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
	postId,
	category,
	title,
	description,
	authorId,
	thumbnail,
}) => {
	const shortDescription =
		description.length > 150 ? description.substr(0, 150) + "..." : description;

	const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
	return (
		<article className="post">
			<div className="post__thumbnail">
				<img src={thumbnail} alt={title} />
			</div>
			<div className="post__content">
				<Link to={`/posts/${postId}`}>
					<h3>{shortTitle}</h3>
				</Link>
				<p>{shortDescription}</p>
				<div className="post__footer">
					<PostAuthor />
					<Link to={`/post/categories/${category}`} className="btn category">
						{category}
					</Link>
				</div>
			</div>
		</article>
	);
};

export default PostItem;