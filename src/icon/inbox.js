import React from 'react';
import iconSvg from '../icons/normalized/inbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__inbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender