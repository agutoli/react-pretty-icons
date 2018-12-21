import React from 'react';
import iconSvg from '../icons/normalized/zodiac-leo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-leo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender