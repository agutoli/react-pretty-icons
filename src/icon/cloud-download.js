import React from 'react';
import iconSvg from '../icons/normalized/cloud-download.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-download" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender