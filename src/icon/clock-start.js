import React from 'react';
import iconSvg from '../icons/normalized/clock-start.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-start" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender