import React from 'react';
import iconSvg from '../icons/normalized/beta.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__beta" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender