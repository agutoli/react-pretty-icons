import React from 'react';
import iconSvg from '../icons/normalized/delete-empty.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__delete-empty" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender