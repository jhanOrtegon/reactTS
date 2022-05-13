import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 75% 20%;
    gap: 5%;
    @media only screen and (max-width: 576px) {
        grid-template-columns: 100%;
        gap:10% ;
    }
`