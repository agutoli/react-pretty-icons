import React from 'react';
import iconSvg from '../icons/normalized/angle-obtuse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__angle-obtuse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender