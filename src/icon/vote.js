import React from 'react';
import iconSvg from '../icons/normalized/vote.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vote" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender