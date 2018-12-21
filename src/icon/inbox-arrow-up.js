import React from 'react';
import iconSvg from '../icons/normalized/inbox-arrow-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__inbox-arrow-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender