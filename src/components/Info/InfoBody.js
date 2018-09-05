import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  grid-area: InfoRight;
  margin: 0;
  padding: 0;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto);
  grid-gap: 0;
  grid-template-areas: 'InfoBodyTop' 'InfoBodyBottom';
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 2rem 0;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto);
    grid-gap: 0;
    grid-template-areas: 'InfoBodyTop' 'InfoBodyBottom';
  }
`

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
