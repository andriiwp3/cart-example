import React from 'react'

export interface LayoutProviderProps extends React.PropsWithChildren {}

export default function LayoutProvider({ children }: LayoutProviderProps) {
    return <div className="container mx-auto">{children}</div>
}