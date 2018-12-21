import React from 'react';
import iconSvg from '../icons/normalized/cloud-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender