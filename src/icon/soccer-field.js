import React from 'react';
import iconSvg from '../icons/normalized/soccer-field.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__soccer-field" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender