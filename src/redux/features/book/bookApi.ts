import { api } from "../../api/apiSlice";
import { IUserState } from "../user/userSlice";

export type IBook = {
	title: string;
	author: string;
	genre: string;
	publicationDate: string;
	reviews: {
		user: IUserState;
		comment: string;
	}[];
	id: string;
};

const bookApi = api.injectEndpoints({
	endpoints: (builder) => ({
		addBook: builder.mutation({
			query: (body) => ({
				url: "/books",
				method: "POST",
				body,
			}),
			invalidatesTags: ["books"],
		}),

		getAllBooks: builder.query({
			query: ({ searchTerm, genre, year }) =>
				`/books?${searchTerm ? "searchTerm=" + searchTerm + "&" : ""}${
					genre ? "genre=" + genre + "&" : ""
				}${year ? "year=" + year : ""}`,
			transformResponse(
				baseQueryReturnValue: { data: IBook[] },
				_meta,
				_arg
			) {
				return baseQueryReturnValue.data;
			},
			providesTags: ["books"],
		}),

		getSingleBook: builder.query({
			query: (id) => `/books/${id}`,
			transformResponse(
				baseQueryReturnValue: { data: IBook },
				_meta,
				_arg
			) {
				return baseQueryReturnValue.data;
			},
			providesTags: ["books"],
		}),

		deleteBook: builder.mutation<IBook, { id: string }>({
			query: ({ id }) => ({
				url: `/books/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["books"],
		}),

		addReview: builder.mutation<
			IBook,
			{
				id: string;
				data: {
					user: string;
					comment: string;
				};
			}
		>({
			query: ({ id, data }) => ({
				url: `/books/${id}/review`,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["books"],
		}),

		editBook: builder.mutation<IBook, { id: string; data: Partial<IBook> }>(
			{
				query: ({ id, data }) => ({
					url: `/books/${id}`,
					method: "PATCH",
					body: data,
				}),
				invalidatesTags: ["books"],
			}
		),
	}),
});

export const {
	useAddBookMutation,
	useGetAllBooksQuery,
	useGetSingleBookQuery,
	useDeleteBookMutation,
	useAddReviewMutation,
	useEditBookMutation,
} = bookApi;
