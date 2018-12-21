import React from 'react';
import iconSvg from '../icons/normalized/monitor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__monitor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender