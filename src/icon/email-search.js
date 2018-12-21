import React from 'react';
import iconSvg from '../icons/normalized/email-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender