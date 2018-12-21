import React from 'react';
import iconSvg from '../icons/normalized/copyright.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__copyright" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender