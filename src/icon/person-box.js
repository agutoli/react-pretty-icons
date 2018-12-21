import React from 'react';
import iconSvg from '../icons/normalized/person-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__person-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender