import React from 'react';
import iconSvg from '../icons/normalized/angularjs.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__angularjs" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender