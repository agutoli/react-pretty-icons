import React from 'react';
import iconSvg from '../icons/normalized/zodiac-gemini.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-gemini" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender