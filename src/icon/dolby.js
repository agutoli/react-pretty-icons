import React from 'react';
import iconSvg from '../icons/normalized/dolby.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dolby" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender