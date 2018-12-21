import React from 'react';
import iconSvg from '../icons/normalized/hangouts.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hangouts" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender