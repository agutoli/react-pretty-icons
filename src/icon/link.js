import React from 'react';
import iconSvg from '../icons/normalized/link.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__link" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender