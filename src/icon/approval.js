import React from 'react';
import iconSvg from '../icons/normalized/approval.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__approval" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender