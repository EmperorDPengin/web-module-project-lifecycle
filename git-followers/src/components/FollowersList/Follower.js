import React, { Component }  from "react";

import FollowerStyled from "./FollowerStyled";
class Follower extends Component {
    
    render() {
        const { follower } = this.props;
        return(
            <FollowerStyled className="follower-card">
                <img src={follower["avatar_url"]} alt="follower pic" />
                <h1>@{follower.login}</h1>
            </FollowerStyled>
        )
    }
}

export default Follower;