/** @format */

// import { createSlice, } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Itask {
    id: number;
    content: string;
    isCompleted: boolean;
    userId: number;
}

const backendURL = "https://task-api-k86t.onrender.com";

export const taskSliceApi = createApi({
    reducerPath: "task",
    baseQuery: fetchBaseQuery({
        baseUrl: backendURL,
    }),
    tagTypes: ["Itask"],
    endpoints: (builder) => ({
        getAllTasks: builder.query<Itask[], number>({
            query(userId: number) {
                return {
                    url: `/api/task/${userId}`,
                    method: "GET",
                };
            },
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(
                              ({ id }) => ({ type: "Itask", id } as const)
                          ),
                          { type: "Itask", id: "LIST" },
                      ]
                    : [{ type: "Itask", id: "LIST" }],
        }),
        addtask: builder.mutation<
            Itask,
            Partial<Itask> & Pick<Itask, "userId">
        >({
            query({ userId, ...body }) {
                return {
                    url: `/api/task/create/${userId}`,
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [{ type: "Itask", id: "LIST" }],
        }),
    }),
});

export const { useGetAllTasksQuery, useAddtaskMutation } = taskSliceApi;
