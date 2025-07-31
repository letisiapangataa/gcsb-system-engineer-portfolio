'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Login from './components/Login'
import Portfolio from './components/Portfolio'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on component mount
  useEffect(() => {
    const checkSession = () => {
      const authStatus = localStorage.getItem('gcsb-portfolio-auth')
      const authTime = localStorage.getItem('gcsb-portfolio-auth-time')
      
      if (authStatus === 'true' && authTime) {
        const currentTime = new Date().getTime()
        const loginTime = parseInt(authTime)
        const sessionDuration = 8 * 60 * 60 * 1000 // 8 hours in milliseconds
        
        // Check if session is still valid
        if (currentTime - loginTime < sessionDuration) {
          setIsAuthenticated(true)
        } else {
          // Session expired, clear storage
          localStorage.removeItem('gcsb-portfolio-auth')
          localStorage.removeItem('gcsb-portfolio-auth-time')
        }
      }
      setIsLoading(false)
    }

    checkSession()
  }, [])

  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true)
      localStorage.setItem('gcsb-portfolio-auth', 'true')
      localStorage.setItem('gcsb-portfolio-auth-time', new Date().getTime().toString())
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('gcsb-portfolio-auth')
    localStorage.removeItem('gcsb-portfolio-auth-time')
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading GCSB Portfolio...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      {!isAuthenticated ? (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Login onLogin={handleLogin} />
        </motion.div>
      ) : (
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Portfolio onLogout={handleLogout} />
          {/* Logout Button - Hidden but accessible via console or keyboard shortcut */}
          <button
            onClick={handleLogout}
            className="hidden"
            aria-label="Logout"
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === 'l') {
                handleLogout()
              }
            }}
          >
            Logout
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
