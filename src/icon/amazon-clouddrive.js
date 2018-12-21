import React from 'react';
import iconSvg from '../icons/normalized/amazon-clouddrive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__amazon-clouddrive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender