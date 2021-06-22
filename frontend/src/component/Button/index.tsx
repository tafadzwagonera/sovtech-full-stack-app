import colors from '../../util/colors'
import styled from 'styled-components'

const { 
  primary,
  transparent,
  white,
} = colors

const Button = styled.button`
  margin: .5rem 0;
  border-radius: 10rem;
  border-color: ${transparent};
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: ${white};
  color: ${primary};
  cursor: pointer;

  -webkit-box-shadow: 0rem .5rem 3rem -.4rem rgba(52,52,52,0.2);
      -moz-box-shadow: 0rem .5rem 3rem -.4rem rgba(52,52,52,0.2);
        box-shadow: 0rem .5rem 3rem -.4rem rgba(52,52,52,0.2);

  :hover {
    -webkit-box-shadow: 0rem .2rem .4rem -.1rem rgba(0,0,0,0.2), 
        0rem .4rem .5rem 0rem rgba(0,0,0,0.14), 
        0rem .1rem 1rem 0rem rgba(0,0,0,0.12);
      -moz-box-shadow: 0rem .2rem .4rem -.1rem rgba(0,0,0,0.2), 
          0rem .4rem .5rem 0rem rgba(0,0,0,0.14), 
          0rem .1rem 1rem 0rem rgba(0,0,0,0.12);
        box-shadow: 0rem .2rem .4rem -.1rem rgba(0,0,0,0.2), 
            0rem .4rem .5rem 0rem rgba(0,0,0,0.14), 
            0rem .1rem 1rem 0rem rgba(0,0,0,0.12);
    transition: all 0.5s ease-in-out;
  }
`

export default Button