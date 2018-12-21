import React from 'react';
import iconSvg from '../icons/normalized/poll-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__poll-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender