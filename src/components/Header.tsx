import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderStyles>
      <h1 className='hl-3'>oi</h1>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  color: ${({ theme }) => theme.colors.White};
`

export default Header