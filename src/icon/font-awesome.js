import React from 'react';
import iconSvg from '../icons/normalized/font-awesome.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__font-awesome" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender