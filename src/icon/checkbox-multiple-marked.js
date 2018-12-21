import React from 'react';
import iconSvg from '../icons/normalized/checkbox-multiple-marked.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-multiple-marked" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender