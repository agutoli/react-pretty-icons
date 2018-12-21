import React from 'react';
import iconSvg from '../icons/normalized/zodiac-aries.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-aries" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender