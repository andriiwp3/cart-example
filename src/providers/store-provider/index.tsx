import React from 'react'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'

export interface StoreProviderProps extends React.PropsWithChildren {
    store: Store;
}

export default function StoreProvider({ store, children }: StoreProviderProps) {
    return <Provider store={store}>{children}</Provider>
}