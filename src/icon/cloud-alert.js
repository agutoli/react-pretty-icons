import React from 'react';
import iconSvg from '../icons/normalized/cloud-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender