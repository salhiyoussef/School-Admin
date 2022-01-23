import styled from 'styled-components';

export const StyledLogo = styled.img`
height: ${props => props.collapsed ? '65px' : '120px'};
position: relative;
bottom: ${props => props.collapsed ? '25px' : '40px'};
right:  ${props => props.collapsed ? '15px' : '0'};
`