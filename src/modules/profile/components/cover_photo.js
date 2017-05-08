import React from 'react'
import '../styles/cover_photo.scss'

const CoverPhoto = ({ photoURL }) => {
    const coverStyle = {
        backgroundImage: `url(${photoURL})`
    }
    return (
        <div className="cover_photo" style={coverStyle}>
        </div>
    )
}

export default CoverPhoto
