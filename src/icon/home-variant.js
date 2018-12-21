import React from 'react';
import iconSvg from '../icons/normalized/home-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender