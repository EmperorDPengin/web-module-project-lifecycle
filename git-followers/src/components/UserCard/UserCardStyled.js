import styled from "styled-components";

const UserCardStyled = styled.div`
    width: 35%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    background-color: #4f4f4f;
    border-radius: 10px;
    padding: 1.5% 1.5%;
    margin-left: 2%;

    .Card-Header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 50%;
        border-radius: 100px;

    }

    h1 {
        width: 50%;
        margin: 0;
        font-size: 1.5rem;
    }

    h2{
        font-size: 1.4rem;
    }

    h3 {
        margin: 0;
        margin-bottom: 5%;
    }

    h4{
        margin: 0;
    }

    

`

export default UserCardStyled;