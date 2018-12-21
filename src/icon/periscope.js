import React from 'react';
import iconSvg from '../icons/normalized/periscope.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__periscope" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender