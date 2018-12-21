import React from 'react';
import iconSvg from '../icons/normalized/clock-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender