import React from 'react';
import iconSvg from '../icons/normalized/multiplication-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__multiplication-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender