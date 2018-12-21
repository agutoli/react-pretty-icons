import React from 'react';
import iconSvg from '../icons/normalized/view-sequential.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-sequential" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender