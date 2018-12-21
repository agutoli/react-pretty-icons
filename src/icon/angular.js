import React from 'react';
import iconSvg from '../icons/normalized/angular.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__angular" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender