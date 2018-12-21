import React from 'react';
import iconSvg from '../icons/normalized/nut.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__nut" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender