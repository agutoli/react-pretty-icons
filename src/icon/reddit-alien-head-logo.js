import React from 'react';
import iconSvg from '../icons/normalized/reddit-alien-head-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reddit-alien-head-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender