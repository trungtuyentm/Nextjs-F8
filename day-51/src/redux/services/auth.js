import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth = createApi({
    reducerPath: "auth",
    refetchOnReconnect: true,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_API,
    }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        verifyGoogleToken: builder.mutation({
            query: (token) => {
                return {
                    url: `/auth/google/verify`,
                    method: "POST",
                    body: { token },
                };
            },
            invalidatesTags: [{ type: "Posts", id: "LIST" }],
        }),
    }),
});
