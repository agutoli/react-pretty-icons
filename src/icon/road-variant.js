import React from 'react';
import iconSvg from '../icons/normalized/road-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__road-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender