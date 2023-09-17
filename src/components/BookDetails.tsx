import { Link, useParams } from "react-router-dom";
import {
	useDeleteBookMutation,
	useGetSingleBookQuery,
} from "../redux/features/book/bookApi";
import Review from "./Review";
import AddReview from "./AddReview";

const BookDetails = () => {
	const { id: bookId } = useParams();
	const { data } = useGetSingleBookQuery(bookId);
	const [deleteBook] = useDeleteBookMutation();

	const deleteHandler = () => {
		const confDelete = confirm("do you wnat to delete?");
		if (confDelete) {
			deleteBook({ id: bookId! });
		}
	};

	return (
		<>
			<div className="card w-1/3 mx-auto m-4 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://images.unsplash.com/photo-1603705502222-4356c929be57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
						alt="Shoes"
						className="w-auto"
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{data?.title}</h2>

					<p className="text-left">Author: {data?.author}</p>
					<p className="text-left">Genre: {data?.genre}</p>
					<p className="text-left">
						Published: {data?.publicationDate}
					</p>

					<div className="flex justify-end">
						<div>
							<button
								onClick={deleteHandler}
								className="btn btn-primary"
							>
								Delete
							</button>
						</div>
						<Link to={`/addBook/${bookId}/edit`}>
							<div className="ml-4">
								<button className="btn btn-primary">
									Edit
								</button>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<h2 className="text-center font-bold my-10">All Reviews</h2>

			<div className="grid grid-cols-3 gap-4 px-44 pb-16">
				<div className="card w-96 py-8 bg-base-100 shadow-xl">
					<div className="card-body">
						{data?.reviews?.map((review) => (
							<Review key={review?.comment} review={review} />
						))}
					</div>
				</div>
			</div>

			<div className="flex justify-center mb-10">
				<label htmlFor="my_modal_6" className="btn btn-primary">
					Add Review
				</label>
			</div>

			{/* add review component */}
			<AddReview />
		</>
	);
};

export default BookDetails;
