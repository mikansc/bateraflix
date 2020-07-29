import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 1px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: all 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
    transform: scale(0.98);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
