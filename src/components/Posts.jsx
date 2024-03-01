import { DUMMY_POSTS } from "../data";
import { useState } from "react";
import PostItem from "./PostItem";

const Posts = () => {
	const [posts, setPosts] = useState(DUMMY_POSTS);
	return (
		<section className="posts">
			{posts.length > 0 ? (
				<div className="container posts__container">
					{posts.map(
						({ id, category, title, thumbnail, description, authorId }) => (
							<PostItem
								key={id}
								postId={id}
								id={id}
								category={category}
								title={title}
								thumbnail={thumbnail}
								description={description}
								authorId={authorId}
							/>
						)
					)}
				</div>
			) : (
				<div className="center">
					<h1>Sorry, No posts found :(</h1>
				</div>
			)}
		</section>
	);
};

export default Posts;
