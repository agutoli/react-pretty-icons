import React from 'react';
import iconSvg from '../icons/normalized/evernote.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__evernote" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender