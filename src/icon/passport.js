import React from 'react';
import iconSvg from '../icons/normalized/passport.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__passport" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender