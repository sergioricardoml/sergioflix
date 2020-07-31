import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  box-sizing: border-box;
  border: 1px solid var(--white);
  background: transparent;
  border-radius: 4px;
  padding: 16px 24px;

  color: var(--white);
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--primary);
    color: var(--white);

    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;

export default Button;
