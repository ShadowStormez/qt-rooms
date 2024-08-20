'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
export const HeroStyle = styled.div<{ Wave: string }>(
    ({ Wave }) => css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        background-image: url(${Wave});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        padding: 120px 0;
        .hero-ul {
            display: flex;
            align-items: center;
            gap: 5px;
            list-style-type: none;

            li {
                display: flex;
                align-items: center;
            }
        }
    `
);
