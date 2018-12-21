import React from 'react';
import iconSvg from '../icons/normalized/application.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__application" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender