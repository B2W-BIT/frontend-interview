import React, {Component} from 'react'
import PhotoImg from '../../../public/assets/images/perfil.png'

class PhotoBio extends Component {
    render () {
        return (
            <div>
                <div className="photo-left">
                    <img src={PhotoImg}/>
                </div>
            </div>
        )
    }
}

export default PhotoBio