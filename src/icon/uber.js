import React from 'react';
import iconSvg from '../icons/normalized/uber.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__uber" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender