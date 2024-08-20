'use client';
import styled from '@emotion/styled';

export const PostsContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 70%;
    .Blog-Post {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #ebf1ffd9;
        padding: 5px;
        border-radius: 10px;
    }

    .Blog-Description {
        display: flex;
        flex-direction: column;
        gap: 70px;
        padding: 30px;
        border-radius: 10px;
    }

    .Blog-Topic {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h3 {
            color: #0a1425;
        }
    }

    .Category-Link span {
        background-color: #e6ebff;
        color: #3772ff;
        padding: 6px 8px;
        font-size: 14px;
        border-radius: 12px;
    }
    .Blog-Author {
        display: flex;
        gap: 5px;
    }

    .Author-Info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        h4 {
            color: #0a1425;
            font-size: 14px;
        }
        small {
            color: #333333;
        }
    }

    .Blog-Date {
        display: flex;
        gap: 10px;
        small {
            color: #333333;
            &:last-child {
                &::before {
                    content: '';
                    width: 2px;
                    height: 2px;
                    background-color: #0a1425;
                    border-radius: 50%;
                }
            }
        }
    }
    .HasBefore {
        ::before {
        }
    }

    .Blog-Info {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .Blog-Views {
        display: flex;
        justify-content: space-between;
        gap: 3px;
        align-items: baseline;
        span {
            font-size: 12px;
            color: #5c5c5c;
        }
    }
`;
