import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const PhotosApi = createApi({
    reducerPath: 'PhotosApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/photos' }),
    endpoints: (builder) => ({
        getAllImages: builder.query({
            query: () => ''
        })
    })
})


export const { useGetAllImagesQuery } = PhotosApi

export default PhotosApi