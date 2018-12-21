import React from 'react';
import iconSvg from '../icons/normalized/zodiac-scorpio.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-scorpio" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender