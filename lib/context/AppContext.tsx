'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  setRandomColorValue: () => void
  currentProject: number
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)

  // Used to set random color for background and cube interactions
  const setRandomColorValue = () => {
    const randomValue = Math.floor(Math.random() * 360) + 1
    setValue(randomValue)
  }

  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        setRandomColorValue,
        currentProject,
        setCurrentProject
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the AppContext
const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export { AppProvider, useAppContext }
