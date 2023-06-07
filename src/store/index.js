import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './app/demoSlice'
import { createLogger } from 'redux-logger'
import commonSlice from './app/commonSlice'

const middlewares = []
if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
        collapsed: (logEntry) => !logEntry.error,
    })
    middlewares.push(logger)
}

export const store = configureStore({
    reducer: {
        demo: demoSlice,
        common: commonSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat(middlewares),
    devTools: process.env.NODE_ENV === 'development',
})
