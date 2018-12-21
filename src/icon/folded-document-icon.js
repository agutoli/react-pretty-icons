import React from 'react';
import iconSvg from '../icons/normalized/folded-document-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folded-document-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender