import styled from 'styled-components';

export const ImageContainer = styled.div`
    background-image: ${({ urlToImage }) => `url(${urlToImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;