import React from 'react';
import iconSvg from '../icons/normalized/zodiac-sagittarius.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-sagittarius" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender