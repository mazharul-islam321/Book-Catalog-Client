import { useState } from "react";
import { useAppSelector } from "../redux/hook";
import { useNavigate, useParams } from "react-router-dom";
import { useAddReviewMutation } from "../redux/features/book/bookApi";

const AddReview = () => {
	const [comment, setComment] = useState("");
	const user = useAppSelector((state) => state.user);

	const { id = undefined } = useParams<{ id: string }>();
	const [addReview] = useAddReviewMutation();
	const navigate = useNavigate();

	const saveHandler = async () => {
		try {
			const options = {
				id: id!,
				data: { user: user.user.email, comment: comment },
			};

			await addReview(options).unwrap();

			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	// console.log("object-->>", user);

	return (
		<>
			<input type="checkbox" id="my_modal_6" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg mb-4">
						Write here your review
					</h3>

					<div className="mb-7">
						<textarea
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							className="textarea textarea-primary w-full"
							placeholder="Leave a review here"
						/>
					</div>

					<label
						htmlFor="my_modal_6"
						onClick={saveHandler}
						className="btn btn-primary"
					>
						Add Review
					</label>

					<div className="modal-action">
						<label htmlFor="my_modal_6" className="btn">
							Close!
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddReview;
