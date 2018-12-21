import React from 'react';
import iconSvg from '../icons/normalized/feather.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__feather" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender