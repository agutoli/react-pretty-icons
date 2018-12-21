import React from 'react';
import iconSvg from '../icons/normalized/television.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__television" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender