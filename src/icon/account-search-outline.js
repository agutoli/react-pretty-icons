import React from 'react';
import iconSvg from '../icons/normalized/account-search-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-search-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender