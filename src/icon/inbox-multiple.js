import React from 'react';
import iconSvg from '../icons/normalized/inbox-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__inbox-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender