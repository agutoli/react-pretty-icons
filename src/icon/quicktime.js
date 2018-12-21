import React from 'react';
import iconSvg from '../icons/normalized/quicktime.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__quicktime" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender