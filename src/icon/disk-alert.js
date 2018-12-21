import React from 'react';
import iconSvg from '../icons/normalized/disk-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__disk-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender