import React from 'react';
import iconSvg from '../icons/normalized/pingchat-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pingchat-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender