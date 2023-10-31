import styled from "styled-components"


const HeaderContainer = styled.header`
  background-color: orange;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  font-size: 24px;
  color: black;
  text-decoration: none;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 120px;

    li {
      a {
        text-decoration: none;
        color: black;
        font-size: 20px;
        padding: 16px 20px;
       
         

        &:hover {
         
          box-shadow: 0 12px 16px 0 rgba(12, 10, 10, 0.822), 0 17px 50px 0 rgba(3, 3, 3, 0.19);
          
        }
      }
    }
  }
`;





function Header() {
  return (
    <HeaderContainer>
      <Logo>LOGO</Logo>
      <Navigation>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/aboutus">About US</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/promotions">Promotions</a></li>
        </ul>
      </Navigation>
      
       
       
    </HeaderContainer>
   
  )
}

export default Header

{/* <StyledImage src={ford} alt="Ford Image"/> */}