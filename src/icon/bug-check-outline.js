import React from 'react';
import iconSvg from '../icons/normalized/bug-check-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bug-check-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender