import React from 'react';
import iconSvg from '../icons/normalized/harddisk.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__harddisk" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender