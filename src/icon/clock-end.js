import React from 'react';
import iconSvg from '../icons/normalized/clock-end.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clock-end" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender