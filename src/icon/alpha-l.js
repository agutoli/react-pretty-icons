import React from 'react';
import iconSvg from '../icons/normalized/alpha-l.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-l" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender