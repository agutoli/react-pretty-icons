import React from 'react';
import iconSvg from '../icons/normalized/file-account.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-account" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender