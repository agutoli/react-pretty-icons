import React from 'react';
import iconSvg from '../icons/normalized/alert-octagram.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alert-octagram" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender