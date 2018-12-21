import React from 'react';
import iconSvg from '../icons/normalized/garage-open.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__garage-open" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender