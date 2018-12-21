import React from 'react';
import iconSvg from '../icons/normalized/xmpp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xmpp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender