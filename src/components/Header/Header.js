import { useState } from 'react';





const Header = ({ data }) => {

    const [headerState] = useState(data);

    // fetch the current profile picture name [user can save more than one]
    const hreaderImage = headerState.image?.showImage 
                            ? require(`../../assets/images/${headerState.image.imageName}`)
                            : '';  
    
    const getBio = (bio, experienceDates) => {
        return bio.replace(
            experienceDates.replacer,
            
        )
    }

}