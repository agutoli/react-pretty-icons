import React from 'react';
import iconSvg from '../icons/normalized/checkbox-indeterminate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-indeterminate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender