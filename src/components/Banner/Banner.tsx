import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/BreakPoints'

const Banner = () => {
  return (
    <BannerContent>
      <TextContainer>
        <h2 className='hl-2'>Energia limpa e renovavel<br />
          Para um mundo melhor.</h2>

        <p className='b-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Vivamus pulvinar dapibus turpis id efficitur. <br />
          Sed tempus sit amet arcu in lobortis. Praesent id neque dui.</p>

        <p className='b-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Vivamus pulvinar dapibus turpis id efficitur. <br />
          Sed tempus sit amet arcu in lobortis. Praesent id neque dui.</p>
      </TextContainer>

      <ImgContainer>
        <img src="https://images.unsplash.com/photo-1589275776107-e193042128bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      </ImgContainer>
    </BannerContent>
  )
}

const BannerContent = styled.main`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;

  margin-top:50px;
  margin-bottom:77px;

  display:grid;
  grid-template-columns:55% auto;

  @media ${device.sm} {
    grid-template-columns:1fr;
  }
`
const TextContainer = styled.div`
  h2 {
    margin-bottom:25px;
  }
  p {
    margin-bottom:15px;
  }
`

const ImgContainer = styled.div`
  img {
  border-radius:5px;
  }
`

export default Banner