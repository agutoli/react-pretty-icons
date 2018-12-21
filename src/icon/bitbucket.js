import React from 'react';
import iconSvg from '../icons/normalized/bitbucket.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bitbucket" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender