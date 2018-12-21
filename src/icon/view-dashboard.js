import React from 'react';
import iconSvg from '../icons/normalized/view-dashboard.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-dashboard" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender