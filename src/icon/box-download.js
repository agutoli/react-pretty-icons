import React from 'react';
import iconSvg from '../icons/normalized/box-download.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__box-download" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender