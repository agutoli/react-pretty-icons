import React from 'react';
import iconSvg from '../icons/normalized/circle-small.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__circle-small" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender