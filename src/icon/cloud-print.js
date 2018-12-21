import React from 'react';
import iconSvg from '../icons/normalized/cloud-print.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-print" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender