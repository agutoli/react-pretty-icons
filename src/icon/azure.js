import React from 'react';
import iconSvg from '../icons/normalized/azure.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__azure" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender