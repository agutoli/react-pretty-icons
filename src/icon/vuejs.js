import React from 'react';
import iconSvg from '../icons/normalized/vuejs.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vuejs" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender