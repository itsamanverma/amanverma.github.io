import { useState } from 'react';
import { calculateDiff } from '../../utils/dates';
import './Header.css';




const Header = ({ data }) => {

    const [headerState] = useState(data);

    // fetch the current profile picture name [user can save more than one]
    const headerImage = headerState.image?.showImage 
                            ? require(`../../assets/images/${headerState.image.imageName}`)
                            : '';  
    
    const getBio = (bio, experienceDates) => {
        return bio.replace(
            experienceDates.replacer,
            calculateDiff(experienceDates.startDate)
        );
    }   

    return (
        <div className='header-section'>
            <div className='main-info'>
                <div className='boi-and-image'>
                    <div className="bio-wrapper">
                        <div className="name-text">{ headerState.name }</div>
                        <div className="role-text">{ headerState.role }</div>
                        <div className="bio-text">
                        { getBio(headerState.bio, headerState.overallExperience) }
                        </div>
                    </div>
                    {headerState.image?.showImage && (
                        <div className="image-wrapper">
                          <img src={headerImage} alt={`profile of ${headerState.name}`} className="profile-picture" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Header;