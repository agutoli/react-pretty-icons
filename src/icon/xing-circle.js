import React from 'react';
import iconSvg from '../icons/normalized/xing-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xing-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender