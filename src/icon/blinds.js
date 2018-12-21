import React from 'react';
import iconSvg from '../icons/normalized/blinds.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blinds" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender