import React from 'react';
import iconSvg from '../icons/normalized/user-avatar-main-picture.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__user-avatar-main-picture" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender