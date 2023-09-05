import { IBook } from "../redux/features/book/bookApi";

type Props = {
	book: IBook;
};

const BookCard = (props: Props) => {
	const { book } = props;
	return (
		<div className="card w-72 m-4 bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://images.unsplash.com/photo-1603705502222-4356c929be57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
					alt="Shoes"
					className="w-auto"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{book.title}</h2>

				<p className="text-left">Author: {book.author}</p>
				<p className="text-left">Genre: {book.genre}</p>
				<p className="text-left">Published: {book.publicationDate}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">details</button>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
