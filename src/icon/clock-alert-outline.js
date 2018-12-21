import React from 'react';
import iconSvg from '../icons/normalized/clock-alert-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-alert-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender