import React from 'react';
import iconSvg from '../icons/normalized/cloud-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender