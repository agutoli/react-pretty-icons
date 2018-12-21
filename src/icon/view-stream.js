import React from 'react';
import iconSvg from '../icons/normalized/view-stream.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-stream" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender