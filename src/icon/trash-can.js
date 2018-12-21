import React from 'react';
import iconSvg from '../icons/normalized/trash-can.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trash-can" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender