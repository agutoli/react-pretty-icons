import React from 'react';
import iconSvg from '../icons/normalized/trash.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trash" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender