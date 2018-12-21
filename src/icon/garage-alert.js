import React from 'react';
import iconSvg from '../icons/normalized/garage-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__garage-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender