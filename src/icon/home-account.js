import React from 'react';
import iconSvg from '../icons/normalized/home-account.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__home-account" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender