import React from 'react';
import iconSvg from '../icons/normalized/cloud-sync.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-sync" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender