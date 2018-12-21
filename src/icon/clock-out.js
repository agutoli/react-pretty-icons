import React from 'react';
import iconSvg from '../icons/normalized/clock-out.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-out" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender