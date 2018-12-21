import React from 'react';
import iconSvg from '../icons/normalized/mixcloud.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mixcloud" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender