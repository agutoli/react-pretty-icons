import React from 'react';
import iconSvg from '../icons/normalized/audiobook.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__audiobook" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender