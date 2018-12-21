import React from 'react';
import iconSvg from '../icons/normalized/washing-machine.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__washing-machine" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender