import React from 'react';
import iconSvg from '../icons/normalized/zodiac-aquarius.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-aquarius" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender