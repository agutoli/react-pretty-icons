import React from 'react';
import iconSvg from '../icons/normalized/zodiac-capricorn.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-capricorn" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender