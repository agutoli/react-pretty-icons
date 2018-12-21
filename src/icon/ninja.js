import React from 'react';
import iconSvg from '../icons/normalized/ninja.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ninja" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender