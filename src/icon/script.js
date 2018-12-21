import React from 'react';
import iconSvg from '../icons/normalized/script.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__script" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender