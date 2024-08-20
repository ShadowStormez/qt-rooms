'use client';
import styled from '@emotion/styled';
export const FooterStyle = styled.div`
    padding: 18px 160px;
    background-color: #111318b2;
    position: relative;
    .Arrow-Up {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 46px;
        height: 46px;
        position: absolute;
        bottom: 75.2px;
        right: 50px;
        border: 2px dashed #2b5cfd;
        border-radius: 50%;
    }
    .Blue-Gradient-Footer {
        position: absolute;
        background: radial-gradient(circle, #3268e8 0%, #0000 100%);
        width: 50vw;
        height: 40vh;
        top: 0;
        left: 0;
        filter: blur(200px);
        z-index: -5;
    }
    .Blue-Gradient-Footer-bottom {
        position: absolute;
        background: radial-gradient(circle, #3268e8 0%, #0000 100%);
        width: 50vw;
        height: 40vh;
        bottom: 0;
        right: -200px;
        filter: blur(200px);
        z-index: -5;
    }
    .Footer-FirstSec {
        display: flex;
        margin-bottom: 50px;
    }
    .Footer-Subscribe {
        display: flex;
        flex-direction: column;
        gap: 11px;
        padding: 10px;
        width: 70%;
    }
    .Footer-Input {
        width: 30%;
        padding: 16.5px 6px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .Search-Input {
        background-color: #111318b2;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 14px 8px 15px 8px;
        width: 80%;
    }
    .Subscribe-Button {
        background-color: #3772ff;
        padding: 10px;
        border-radius: 8px;
        line-height: 28px;
        text-align: center;
        font-size: 14px;
    }

    .Footer-SecondSec {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 46px 0;
        margin-bottom: 40px;
    }
    .Social-Media-Links {
        display: flex;
        flex-direction: column;
        width: 33%;
        padding: 10px;
        gap: 20px;
        color: #f2eefb;

        p {
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            text-align: left;
            word-wrap: break-word;
        }
        .Social-Media-Icons {
            display: flex;
            flex-direction: row;
            gap: 12px;
            a {
                img {
                    width: 40px;
                    height: 40px;
                    background-color: #31175790;
                    border-radius: 8px;
                    padding: 8px;
                }
            }
        }
    }
    .Footer-Nav {
        display: flex;
        width: 33%;
        gap: 25px;
    }
    .Footer-Nav-Sec {
        display: flex;
        flex-direction: column;
        gap: 20px;

        header {
            font-size: 20px;
            font-weight: 700;
            line-height: 30px;
            text-align: left;
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 15px;
            li {
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                text-align: left;
            }
        }
    }
    .Footer-ThirdSec {
        display: flex;
        justify-content: space-between;

        .CopyRight {
            p {
                font-size: 16px;
                font-weight: 400;
                line-height: 26px;
                text-align: left;
                color: #f2eefb;
            }
            a {
                color: #3772ff;
            }
        }

        .Terms {
            ul {
                list-style-type: none;
                display: flex;
                flex-direction: row;
                gap: 25px;
                li {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 18px;
                    text-align: right;
                }
            }
        }
    }
`;
