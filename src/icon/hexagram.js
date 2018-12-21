import React from 'react';
import iconSvg from '../icons/normalized/hexagram.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hexagram" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender