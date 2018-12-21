import React from 'react';
import iconSvg from '../icons/normalized/evernote-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__evernote-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender