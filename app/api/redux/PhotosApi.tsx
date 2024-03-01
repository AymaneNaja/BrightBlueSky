import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const PhotosApi = createApi({
    reducerPath: 'PhotosApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' https://www.googleapis.com/drive/v3/' }),
    endpoints: (builder) => ({
        getFile: builder.query({
            query: (file) => ({
                url: `files/${file}`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': 'AIzaSyDrP5X1bOwHrRP3PUiZXEjSqguTH8ppEKw',
                    "Content-Type": 'application/json'
                }
            })
        })
    })
})


export const { useGetFileQuery } = PhotosApi

export default PhotosApi