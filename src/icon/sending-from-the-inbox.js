import React from 'react';
import iconSvg from '../icons/normalized/sending-from-the-inbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sending-from-the-inbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender