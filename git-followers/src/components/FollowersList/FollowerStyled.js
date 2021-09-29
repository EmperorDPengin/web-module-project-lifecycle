import styled from "styled-components";

const FollowerStyled = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2%;
    padding: 1% 2%;
    background-color: grey;
    border-radius: 20px;

    img {
        width: 35%;
        border-radius: 100px;
    }

    h1 {
        width: 50%;
        font-size: 1.75rem;
        align-self: center;
        text-align: center;
    }
`

export default FollowerStyled;