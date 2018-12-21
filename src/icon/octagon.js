import React from 'react';
import iconSvg from '../icons/normalized/octagon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__octagon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender