'use client';
import styled from '@emotion/styled';

export const PageStyle = styled.div`
    position: relative;
    .Purple-Gradient {
        position: absolute;
        background: radial-gradient(circle, #744ec5 0%, #0000 100%);
        background-color: black;
        filter: blur(120px);
        border-radius: 50%;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: 400px;
        z-index: -5;
    }
    .Blue-Gradient-one {
        position: absolute;
        background: radial-gradient(circle, #3268e8 0%, #0000 100%);
        width: 60vw;
        height: 60vh;
        top: 600px;
        right: -300px;
        filter: blur(250px);
        z-index: -5;
    }
    .Blue-Gradient-two {
        position: absolute;
        background: radial-gradient(circle, #3268e8 0%, #0000 100%);
        width: 100vw;
        height: 100vh;
        top: 1400px;
        left: -300px;
        filter: blur(150px);
        z-index: -5;
    }

    .Blog-Body {
        display: flex;
        align-items: flex-start;
        gap: 40px;
        padding: 80px 100px 50px 120px;
    }
`;
