import { useState } from "react";
import { useGetAllBooksQuery } from "../redux/features/book/bookApi";
import BookCard from "../components/BookCard";

const Home = () => {
	const [searchValue, setSearchValue] = useState("");
	const [selectedYear, setSelectedYear] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");
	const { data, isLoading, refetch } = useGetAllBooksQuery({
		searchTerm: searchValue,
		genre: selectedGenre,
		year: selectedYear,
	});

	if (isLoading) return <h2>Loading. .. ...</h2>;

	return (
		<div className="text-center py-10">
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="search"
					className="input input-bordered w-full max-w-xs"
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="year"
					className="input input-bordered w-full max-w-xs mx-4"
					onChange={(e) => {
						setSelectedYear(e.target.value);
					}}
				/>
				<select
					onChange={(e) => setSelectedGenre(e.target.value)}
					className="select select-bordered w-full max-w-xs"
				>
					<option selected>all</option>
					<option>Fantasy</option>
					<option>Fiction</option>
					<option>others</option>
				</select>
				<button
					onClick={refetch}
					className="btn btn-outline ml-4 btn-success"
				>
					Search
				</button>
			</div>
			<div className="grid grid-cols-3 gap-4 px-44 mt-10">
				{data?.map((book) => (
					<BookCard key={book.id} book={book} />
				))}
			</div>
		</div>
	);
};

export default Home;
