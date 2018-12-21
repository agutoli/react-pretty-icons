import React from 'react';
import iconSvg from '../icons/normalized/zodiac-virgo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-virgo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender