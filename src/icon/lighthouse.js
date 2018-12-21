import React from 'react';
import iconSvg from '../icons/normalized/lighthouse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lighthouse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender