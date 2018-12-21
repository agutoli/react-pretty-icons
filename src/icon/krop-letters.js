import React from 'react';
import iconSvg from '../icons/normalized/krop-letters.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__krop-letters" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender