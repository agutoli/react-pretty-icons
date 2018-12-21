import React from 'react';
import iconSvg from '../icons/normalized/zend.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zend" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender