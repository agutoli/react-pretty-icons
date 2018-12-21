import React from 'react';
import iconSvg from '../icons/normalized/store-24-hour.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__store-24-hour" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender