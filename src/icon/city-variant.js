import React from 'react';
import iconSvg from '../icons/normalized/city-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__city-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender