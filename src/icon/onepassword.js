import React from 'react';
import iconSvg from '../icons/normalized/onepassword.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__onepassword" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender