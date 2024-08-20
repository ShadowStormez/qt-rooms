'use client';
import styled from '@emotion/styled';
export const PaginatorStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px, 416.5px, 30px, 416.5px;

    .Paginator-Container {
        display: flex;
        flex-direction: row;
        padding: 15px;
        gap: 12px;
        margin-top: 35px;
    }

    .page-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: #0a1425;
        background-color: #ebf1ffd9;
        padding: 10px 10px 15px 10px;
        border-radius: 8px;
        border: 1px solid #e5e7eb;
    }

    .active {
        background-color: #3772ff;
        color: #ebf1ffd9;
        border: 1px solid #3772ff;
    }
`;
