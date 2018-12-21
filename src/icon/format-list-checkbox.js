import React from 'react';
import iconSvg from '../icons/normalized/format-list-checkbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-list-checkbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender