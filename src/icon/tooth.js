import React from 'react';
import iconSvg from '../icons/normalized/tooth.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tooth" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender