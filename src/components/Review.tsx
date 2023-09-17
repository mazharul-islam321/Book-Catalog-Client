const Review = (props: any) => {
	const { review } = props;

	console.log("user", review.user);

	return (
		<div className="card w-96 py-8 bg-base-100 shadow-xl mx-10">
			<div className="card-body">
				<h2>User: {review.user}</h2>
				<p className="card-text">{review?.comment}</p>
			</div>
		</div>
	);
};

export default Review;
