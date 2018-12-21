import React from 'react';
import iconSvg from '../icons/normalized/test-tube-empty.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__test-tube-empty" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender