import React from 'react';
import iconSvg from '../icons/normalized/cloud.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender