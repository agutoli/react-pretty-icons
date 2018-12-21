import React from 'react';
import iconSvg from '../icons/normalized/cloud-off-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-off-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender