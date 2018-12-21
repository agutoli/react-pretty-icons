import React from 'react';
import iconSvg from '../icons/normalized/bike.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bike" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender