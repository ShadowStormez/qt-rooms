'use client';
import styled from '@emotion/styled';
export const HeaderStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;
    padding: 30px 0;

    .header-ul {
        display: flex;
        align-items: center;
        gap: 15px;
        list-style-type: none;
    }
    .header-ul li {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .header-ul li a {
        text-decoration: none;
        color: white;
    }
    .header-login {
        display: flex;
        gap: 10px;
    }

    .login {
        color: black;
        font-size: 11px;
        background-color: #ebf1ff;
        border: 0.3px #3772ff;
        border-radius: 8px;
        padding: 5px 10px;
    }
    .get-started {
        color: white;
        border-radius: 8px;
        font-size: 11px;
        background-color: #3772ff;
        border: 0.3px #ebf1ff;
        padding: 5px 10px;
    }
`;
