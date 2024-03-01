'use client'
import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import PhotosApi from './api/redux/PhotosApi'

type Props = {}

function Providers({ children }: { children: React.ReactNode }) {
    const store = configureStore({
        reducer: {
            [PhotosApi.reducerPath]: PhotosApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PhotosApi.middleware)
    })
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers