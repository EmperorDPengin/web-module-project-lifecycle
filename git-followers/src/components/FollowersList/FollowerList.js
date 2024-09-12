import React, { Component } from "react";

import FollowersListStyled from "./FollowerListStyled";
import Follower from "./Follower";

class FollowersList extends Component {
    

    render() {
        return(
            <FollowersListStyled className="followers-list">
                {this.props.followers.map( follower => (
                    <Follower key={follower.id} follower={follower} />
                ))}
            </FollowersListStyled>
        )
    };
};

export default FollowersList;