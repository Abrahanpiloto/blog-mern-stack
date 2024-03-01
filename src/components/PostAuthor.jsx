import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/avatar1.jpg";

const PostAuthor = () => {
	return (
		<Link to={`/posts/users/sssss`} className="post__author">
			<div className="post__author-avatar">
				<img src={Avatar} alt="" />
			</div>
			<div className="post__author-deatils">
				<h5>By: Abrahan Piloto</h5>
				<small>Just Now</small>
			</div>
		</Link>
	);
};

export default PostAuthor;
