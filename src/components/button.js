
import styled, { css } from 'styled-components'
import '../css/main.css'


const Button = styled.Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #020024;
  color: #020024;
  margin: 1em 1em;
  padding: 0.25em 1em;
  text-decoration:none;
  text-transform: uppercase;
  &:hover {
    text-decoration:none;
    color: orange;
  }

  ${props => props.primary && css`
    background:#575F73;
    color: #FFF;
    padding: 0.5em 3em;
    &:hover {
      text-decoration:none;
      color: #575F73;
      background:#FFF

  `}

  ${props => props.secondary && css`
    background:#000;
    color: orange;
    border: 2px solid #000;
    display: inline-block;
  `}
  ${props => props.nav && css`
    background:#ffc529;
    color: #FFF;
    padding: 0.5em 3em;
    &:hover {
      text-decoration:none;
      color: black;
      font-weight: 900;
    }
  `}
`

const Container = styled.div`
  text-align: center;
`

export default Button