import React from 'react';
import iconSvg from '../icons/normalized/christianity.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__christianity" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender