import React from 'react';
import iconSvg from '../icons/normalized/netflix.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__netflix" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender