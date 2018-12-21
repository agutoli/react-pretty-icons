import React from 'react';
import iconSvg from '../icons/normalized/autorenew.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__autorenew" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender