import React from 'react';
import iconSvg from '../icons/normalized/vector-selection.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-selection" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender