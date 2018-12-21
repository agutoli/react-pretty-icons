import React from 'react';
import iconSvg from '../icons/normalized/two-factor-authentication.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__two-factor-authentication" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender