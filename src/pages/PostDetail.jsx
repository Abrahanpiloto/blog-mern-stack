import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog50.jpg";

const PostDetail = () => {
	return (
		<section className="post-detail">
			<div className="container post-detail__container">
				<div className="post-detail__header">
					<PostAuthor />
					<div className="post-detail__buttons">
						<Link to={`/posts/wewwe/edit`} className="btn sm primary">
							Edit
						</Link>
						<Link to={`/posts/wewwe/delete`} className="btn sm danger">
							Delet
						</Link>
					</div>
				</div>
				<h1>This is post title!</h1>
				<div className="post-detail__thumbnail">
					<img src={Thumbnail} alt="" />
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod natus
					libero nesciunt iusto quo assumenda esse, at harum similique ducimus
					recusandae fugit accusamus tempore ex illum repellat necessitatibus.
					Nostrum dolor labore sit aut rerum veniam, recusandae impedit quos,
					consectetur esse praesentium vero autem numquam accusamus eaque
					doloribus. Voluptas, illo mollitia!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
					dicta! Voluptas, nostrum? Officia rerum veritatis incidunt quo, libero
					commodi distinctio possimus deleniti dolor sequi saepe aut at optio.
					Eveniet doloremque vitae debitis, fuga natus error accusamus,
					voluptates a dolor expedita quo. Mollitia modi repudiandae eveniet,
					neque voluptates est error earum officiis laborum, illo, minus quae
					unde debitis? Perspiciatis deserunt, qui quidem non illum
					exercitationem quo odio, sit iste rerum voluptates.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor,
					ipsum earum blanditiis, suscipit itaque, dolore quod in voluptatem
					inventore consequatur sapiente totam maiores! Quod eveniet
					exercitationem porro est incidunt, dicta unde suscipit iure! Rem.
				</p>
			</div>
		</section>
	);
};

export default PostDetail;
