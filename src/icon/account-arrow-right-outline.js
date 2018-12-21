import React from 'react';
import iconSvg from '../icons/normalized/account-arrow-right-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-arrow-right-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender