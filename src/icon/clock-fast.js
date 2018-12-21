import React from 'react';
import iconSvg from '../icons/normalized/clock-fast.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-fast" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender