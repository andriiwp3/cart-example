import { Store } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

export interface StoreProviderProps extends React.PropsWithChildren {
  store: Store;
}

export default function StoreProvider({ store, children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
