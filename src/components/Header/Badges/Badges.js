import './Badges.css';
import { useState } from "react";

const Badges = ({ data }) => {
    const [badgesData]  = useState(data);

    return (
        <div className="badges-wrapper">
            {badgesData?.filter(badges => !badges.isHidden).map((badge, index) =>(
                <div className="badge" key={`badge-$(index)`}>
                    <div className="badge-name">{ badge.badgeName}</div> 
                </div>
            ))}
        </div>
    );
}

export default Badges;