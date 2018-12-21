import React from 'react';
import iconSvg from '../icons/normalized/view-dashboard-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-dashboard-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender