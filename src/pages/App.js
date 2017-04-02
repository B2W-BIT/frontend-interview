import React from 'react'
import Banner from 'Containers/Banner'

const App = ({ children }) => {
  return (
    <div>
      <section id='banner' role='banner'>
        <Banner />
      </section>
      <div className="container">
        <section id='main' role='main'>
          { children }
        </section>
      </div>
    </div>
  )
}

export default App
