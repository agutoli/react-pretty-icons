import React from 'react';
import iconSvg from '../icons/normalized/bug.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bug" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender