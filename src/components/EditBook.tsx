import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	useEditBookMutation,
	useGetSingleBookQuery,
} from "../redux/features/book/bookApi";
import { useParams } from "react-router-dom";
import { useState } from "react";

const EditBook = () => {
	const { id } = useParams();
	const { data } = useGetSingleBookQuery(id);
	const [editBook] = useEditBookMutation();

	const [title, setTitle] = useState(data?.title);
	const [author, setAuther] = useState(data?.author);
	const [genre, setGenre] = useState(data?.genre);
	const [date, setDate] = useState(data?.publicationDate);

	const handleEditBook = (event: {
		preventDefault: () => void;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		target: any;
	}) => {
		event.preventDefault();

		const addBookData = {
			title: title,
			author: author,
			genre: genre,
			publicationDate: date,
		};

		console.log("object->>", addBookData);

		const options = {
			id: id!,
			data: addBookData,
		};

		editBook(options);

		toast.success("Book Edited successfully");
	};

	return (
		<form
			onSubmit={handleEditBook}
			className="flex justify-center items-center flex-col  pt-10 pb-20"
		>
			<div className="form-control w-full max-w-xs mb-3">
				<label className="label">
					<span className="label-text">Book Title:</span>
				</label>
				<input
					type="text"
					name="title"
					placeholder="Type Title"
					className="input input-bordered w-full max-w-xs"
					onChange={(e) => setTitle(e.target.value)}
					defaultValue={data?.title}
				/>
			</div>

			<div className="form-control w-full max-w-xs mb-3">
				<label className="label">
					<span className="label-text">Author Name:</span>
				</label>
				<input
					type="text"
					name="author"
					placeholder="Type Name"
					className="input input-bordered w-full max-w-xs"
					onChange={(e) => setAuther(e.target.value)}
					defaultValue={data?.author}
				/>
			</div>

			<div className="form-control w-full max-w-xs mb-3">
				<label className="label">
					<span className="label-text">Book Genre:</span>
				</label>
				<input
					type="text"
					name="genre"
					placeholder="Type Genre"
					className="input input-bordered w-full max-w-xs"
					onChange={(e) => setGenre(e.target.value)}
					defaultValue={data?.genre}
				/>
			</div>

			<div className="form-control w-full max-w-xs mb-3">
				<label className="label">
					<span className="label-text">Book Publication Date:</span>
				</label>
				<input
					type="date"
					name="date"
					placeholder="Type Date"
					className="input input-bordered w-full max-w-xs"
					onChange={(e) => setDate(e.target.value)}
					defaultValue={data?.publicationDate}
				/>
			</div>
			<button className="btn btn-outline  btn-success mt-10">
				Edit Book info
			</button>
		</form>
	);
};

export default EditBook;
