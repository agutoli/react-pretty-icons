import React from 'react';
import iconSvg from '../icons/normalized/shoe-heel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shoe-heel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender