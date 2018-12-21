import React from 'react';
import iconSvg from '../icons/normalized/subway.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__subway" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender