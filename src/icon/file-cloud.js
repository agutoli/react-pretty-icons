import React from 'react';
import iconSvg from '../icons/normalized/file-cloud.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-cloud" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender