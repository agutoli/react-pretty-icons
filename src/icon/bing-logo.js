import React from 'react';
import iconSvg from '../icons/normalized/bing-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bing-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender