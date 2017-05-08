import React from 'react'
import '../styles/loader.scss'

const Loader = () => (
        <div className="page-loader">
            <div className="twitter-bird-animation"></div>
            <div className="loading">
              <span className="text">Loading</span>
              <span className="blob1 blob"></span>
              <span className="blob2 blob"></span>
              <span className="blob3 blob"></span>
            </div>
        </div>
)

export default Loader
