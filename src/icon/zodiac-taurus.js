import React from 'react';
import iconSvg from '../icons/normalized/zodiac-taurus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zodiac-taurus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender