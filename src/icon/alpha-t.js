import React from 'react';
import iconSvg from '../icons/normalized/alpha-t.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-t" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender