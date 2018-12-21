import React from 'react';
import iconSvg from '../icons/normalized/disk.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__disk" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender