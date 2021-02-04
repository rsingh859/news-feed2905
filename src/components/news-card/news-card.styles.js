import styled from 'styled-components';

export const ImageContainer = styled.div`
    background-image: ${({ urlToImage }) => `url(${urlToImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgb(255, 147, 147);
    background-position: center;
`;