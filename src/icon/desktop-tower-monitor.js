import React from 'react';
import iconSvg from '../icons/normalized/desktop-tower-monitor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__desktop-tower-monitor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender