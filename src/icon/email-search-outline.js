import React from 'react';
import iconSvg from '../icons/normalized/email-search-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-search-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender