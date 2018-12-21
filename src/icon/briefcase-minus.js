import React from 'react';
import iconSvg from '../icons/normalized/briefcase-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender