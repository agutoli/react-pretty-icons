import React from 'react';
import iconSvg from '../icons/normalized/zodiac-pisces.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-pisces" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender