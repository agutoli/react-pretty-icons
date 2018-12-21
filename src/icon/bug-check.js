import React from 'react';
import iconSvg from '../icons/normalized/bug-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bug-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender