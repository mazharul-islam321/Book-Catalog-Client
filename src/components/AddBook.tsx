const AddBook = () => {
	const handleAddBook = (event: {
		preventDefault: () => void;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		target: any;
	}) => {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const author = form.author.value;
		const genre = form.genre.value;
		const date = form.date.value;
		console.log("object->>", title, author, genre, date);
	};

	return (
		<form
			onSubmit={handleAddBook}
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
				/>
			</div>
			<button className="btn btn-outline  btn-success mt-10">
				Add New Book
			</button>
		</form>
	);
};

export default AddBook;
