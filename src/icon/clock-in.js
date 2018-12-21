import React from 'react';
import iconSvg from '../icons/normalized/clock-in.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-in" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender