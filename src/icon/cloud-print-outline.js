import React from 'react';
import iconSvg from '../icons/normalized/cloud-print-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-print-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender