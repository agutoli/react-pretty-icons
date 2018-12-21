import React from 'react';
import iconSvg from '../icons/normalized/yahoo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__yahoo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender