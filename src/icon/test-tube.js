import React from 'react';
import iconSvg from '../icons/normalized/test-tube.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__test-tube" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender