import React from 'react';
import iconSvg from '../icons/normalized/variable.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__variable" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender