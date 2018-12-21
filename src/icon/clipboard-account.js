import React from 'react';
import iconSvg from '../icons/normalized/clipboard-account.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-account" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender