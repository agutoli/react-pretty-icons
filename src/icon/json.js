import React from 'react';
import iconSvg from '../icons/normalized/json.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__json" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender