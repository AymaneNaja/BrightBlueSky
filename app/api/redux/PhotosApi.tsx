import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const PhotosApi = createApi({
    reducerPath: 'PhotosApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/photos' }),
    endpoints: (builder) => ({
        getAllImages: builder.query({
            query: () => ''
        }),
        getImageById: builder.query({
            query: (id) => `/${id}`
        })
    })
})


export const { useGetAllImagesQuery, useGetImageByIdQuery } = PhotosApi

export default PhotosApi