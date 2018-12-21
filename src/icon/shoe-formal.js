import React from 'react';
import iconSvg from '../icons/normalized/shoe-formal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shoe-formal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender