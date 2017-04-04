import React from 'react'
import Banner from 'Containers/Banner'

const App = ({ children }) => {
  return (
    <div>
      <header>
        <Banner />
      </header>
      <main>
        <div className="container">
            { children }
        </div>
    </main>
    </div>
  )
}

export default App
