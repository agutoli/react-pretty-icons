import React from 'react';
import iconSvg from '../icons/normalized/history.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__history" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender