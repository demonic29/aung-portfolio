import React from 'react'
import {ModalProvider} from './components/ModalContext'

const ProjectLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <ModalProvider>
        {children}
    </ModalProvider>
  )
}

export default ProjectLayout