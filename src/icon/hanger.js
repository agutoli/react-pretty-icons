import React from 'react';
import iconSvg from '../icons/normalized/hanger.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hanger" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender