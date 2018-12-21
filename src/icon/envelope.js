import React from 'react';
import iconSvg from '../icons/normalized/envelope.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__envelope" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender