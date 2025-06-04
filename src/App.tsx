import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="flex items-center space-x-4">
              <a href="https://vite.dev" target="_blank" className="flex-shrink-0">
                <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" className="flex-shrink-0">
                <img src={reactLogo} className="h-12 w-12" alt="React logo" />
              </a>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Vite + React + Tailwind</h1>
            <div className="mt-6">
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                count is {count}
              </button>
              <p className="mt-4 text-gray-600">
                Edit <code className="text-sm font-bold text-gray-800">src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
