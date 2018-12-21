import React from 'react';
import iconSvg from '../icons/normalized/shield.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__shield" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender