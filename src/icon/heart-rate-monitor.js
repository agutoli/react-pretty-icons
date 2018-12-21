import React from 'react';
import iconSvg from '../icons/normalized/heart-rate-monitor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__heart-rate-monitor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender