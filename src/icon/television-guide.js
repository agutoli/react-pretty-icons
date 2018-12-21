import React from 'react';
import iconSvg from '../icons/normalized/television-guide.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__television-guide" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender