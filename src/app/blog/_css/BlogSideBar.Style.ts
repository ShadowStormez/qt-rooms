'use client';
import styled from '@emotion/styled';

export const BlogSideBarStyle = styled.div`
    display: flex;
    width: 30%;
    padding: 15px;
    .Search-Input-Container {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: #d1d5db;
        padding: 5px 2px 5px 0;
        border-radius: 12px;
    }
    .Search-Input {
        border: none;
        background: transparent;
        padding: 10px;
        font-size: 16px;
        color: #4b5563;
        outline: none;
        border-radius: 12px 0 0 12px;

        &::placeholder {
            color: #6b7280;
        }
    }
    .Search-Button {
        background-color: #3b82f6;
        border: none;
        color: white;
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
        border-radius: 12px;

        &:hover {
            background-color: #2563eb;
        }
    }

    .Recent-Posts {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-top: 20px;

        h3 {
            &::after {
                content: '';
                width: 100px;
                display: block;
                margin-top: 15px;
                height: 5px;
                background-color: #3772ff;
            }
        }
    }

    .Recent-Post {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 0;
        gap: 15px;
        border-bottom: 2px solid #efefef;

        img {
            border-radius: 50%;
        }
    }
    .RecentPost-Description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;

        h3 {
            font-size: 16px;
        }
        span {
            font-size: 14px;
        }
    }

    .Categories {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-top: 20px;

        h3 {
            &::after {
                content: '';
                width: 100px;
                display: block;
                margin-top: 15px;
                height: 5px;
                background-color: #3772ff;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 20px;

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5px;
                &::before {
                    content: '';
                    width: 5px;
                    display: inline-block;
                    height: 5px;
                    border-radius: 50%;
                    background-color: #ebf1ff;
                }
            }
        }
    }
    .Tag-Clouds {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-top: 20px;
        h3 {
            &::after {
                content: '';
                width: 100px;
                display: block;
                margin-top: 15px;
                height: 5px;
                background-color: #3772ff;
            }
        }
    }
    .Tag-Links-Container {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
        height: 4em;
    }

    .Clouds-Link span {
        background-color: #e6ebff;
        color: #3772ff;
        padding: 6px 8px;
        font-size: 14px;
        border-radius: 12px;
    }
`;
