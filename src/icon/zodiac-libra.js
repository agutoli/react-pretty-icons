import React from 'react';
import iconSvg from '../icons/normalized/zodiac-libra.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-libra" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender