import React from 'react';
import iconSvg from '../icons/normalized/greater-than-or-equal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__greater-than-or-equal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender