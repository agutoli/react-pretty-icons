import React from 'react';
import iconSvg from '../icons/normalized/monitor-dashboard.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__monitor-dashboard" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender