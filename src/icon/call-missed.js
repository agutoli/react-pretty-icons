import React from 'react';
import iconSvg from '../icons/normalized/call-missed.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__call-missed" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender