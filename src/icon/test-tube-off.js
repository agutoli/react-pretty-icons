import React from 'react';
import iconSvg from '../icons/normalized/test-tube-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__test-tube-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender