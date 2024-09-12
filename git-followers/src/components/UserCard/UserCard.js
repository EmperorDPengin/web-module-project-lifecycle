import React, { Component } from "react";

import UserCardStyled from "./UserCardStyled"; 
class UserCard extends Component {
    // user = this.props.user;

    render() {
        const { avatar_url, name, login, bio, followers } = this.props.user;

        return(
            <UserCardStyled className="User-Card">
                <div className="Card-Header">
                    <img src={avatar_url} alt="profile" />
                    { name ? <h1>{name}</h1>:<h1>NO NAME</h1>}
                </div>
                <h2>‖ @{login} ‖</h2>
                <h3>" {bio} "</h3>
                <h4>Followers: {followers}</h4>
            </UserCardStyled>
        )
    };
};

export default UserCard;