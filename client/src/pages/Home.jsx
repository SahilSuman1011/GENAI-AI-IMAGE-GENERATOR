import React from 'react'
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageCard from '../components/ImageCard';

const Container = styled.div`
   height: 100%;
   overflow-y: scroll;
   background : ${({ theme }) => theme.bg}
   padding : 30px 30px;
   padding-bottom : 50px;
   display: flex; 
   flex-direction : column;
   align-items : center;
   gap : 20px;
   @media (max-width : 768) {
   padding : 6px 10px;}
`;

const Headline = styled.div`
   font-size : 34px;
   color : ${({theme}) => theme.text_primary};
   font-weight : 500;
   display : flex;
   align-items : center;
   flex-direction : column;

   @media (max-width: 600px) {
   font-size : 22px;
   }
`;
const Span = styled.div`
   font-size : 30px;
   font-weight : 700;
   color : ${({theme}) => theme.secondary};

   @media (max-width: 600px) {
   font-size: 20px;
   }
`;

const Wrapper = styled.div`
    width: 100%;
    background: blue;
    max-width : 1400px;
    padding : 32px 0px;
    display : flex;
    justify-content : center;
`;

const CardWrapper = styled.div`
    display: grid;
    gap: 20px;
    @media(min-width : 1200px) {
    grid-template-columns: repeat(4, 1fr);
    }
    @media(min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width : 639px) {
    grid-template-columns: repeat(2, 1fr);
    }
`;

const Home = () => {
  return (
    <Container>
      <Headline> Explore Popular Posts in the Community !
      <Span>⦿ Generated with AI ⦿</Span>
      </Headline>
      <SearchBar />
      <Wrapper>
        <CardWrapper>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
          <ImageCard/>
           <ImageCard/>
           <ImageCard />
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home;