import React from 'react';
import iconSvg from '../icons/normalized/clock-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender