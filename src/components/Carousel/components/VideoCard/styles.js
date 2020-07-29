import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  width: 298px;
  height: 197px;
  border-radius: 10px;
  border: 2px solid;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  text-decoration: none;
  overflow: hidden;
  color: white;
  padding: 16px;
  cursor: pointer;
  
  position: relative;
  display: flex;
  flex: 0 0 298px;
  align-items: flex-end;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
