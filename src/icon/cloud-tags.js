import React from 'react';
import iconSvg from '../icons/normalized/cloud-tags.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-tags" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender