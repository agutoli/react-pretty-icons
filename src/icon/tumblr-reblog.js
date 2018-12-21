import React from 'react';
import iconSvg from '../icons/normalized/tumblr-reblog.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tumblr-reblog" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender