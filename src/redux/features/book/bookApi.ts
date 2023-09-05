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
	}),
});

export const { useAddBookMutation, useGetAllBooksQuery } = bookApi;
