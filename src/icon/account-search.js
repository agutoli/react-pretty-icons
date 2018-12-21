import React from 'react';
import iconSvg from '../icons/normalized/account-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender