'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react'

interface LoginProps {
  onLogin: (success: boolean) => void
}

const Login = ({ onLogin }: LoginProps) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Sample credentials for demo
  const DEMO_CREDENTIALS = {
    username: 'gcsb-reviewer',
    password: 'SecureAccess2025!'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate authentication delay
    setTimeout(() => {
      if (
        credentials.username === DEMO_CREDENTIALS.username &&
        credentials.password === DEMO_CREDENTIALS.password
      ) {
        onLogin(true)
      } else {
        setError('Invalid credentials. Please check your username and password.')
        onLogin(false)
      }
      setIsLoading(false)
    }, 1500)
  }

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }))
    if (error) setError('')
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 border border-black opacity-10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 border border-black opacity-10 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-white rounded-lg border border-black p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-black rounded-full p-4">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">GCSB Portfolio Access</h1>
            <p className="text-black">Letisia Pangata'a</p>
            <p className="text-black text-sm">NZIC System Engineer (Level 1) Application</p>
          </motion.div>

          {/* Demo Credentials Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-black rounded-lg p-4 mb-6"
          >
            <h3 className="font-semibold text-black mb-2 flex items-center">
              <Lock className="h-4 w-4 mr-2" />
              Demo Credentials
            </h3>
            <div className="text-sm text-black space-y-1">
              <p><strong>Username:</strong> gcsb-reviewer</p>
              <p><strong>Password:</strong> SecureAccess2025!</p>
            </div>
          </motion.div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-black" />
                </div>
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-black" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-black hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-black hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
              >
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{error}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Authenticating...
                </div>
              ) : (
                'Access Portfolio'
              )}
            </motion.button>
          </motion.form>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-black">
              Secure Access for GCSB Portfolio Review
            </p>
            <p className="text-xs text-black mt-1">
              © 2025 Letisia Pangata'a
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
