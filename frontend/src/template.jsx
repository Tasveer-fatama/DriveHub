import { SnackbarProvider } from 'notistack'
import React from 'react'

const Template = ({children}) => {
  return (
    <div>
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </div>
  )
}

export default Template
