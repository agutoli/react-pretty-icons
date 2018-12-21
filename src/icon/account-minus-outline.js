import React from 'react';
import iconSvg from '../icons/normalized/account-minus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__account-minus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender