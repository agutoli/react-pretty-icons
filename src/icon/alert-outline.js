import React from 'react';
import iconSvg from '../icons/normalized/alert-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alert-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender