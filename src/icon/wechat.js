import React from 'react';
import iconSvg from '../icons/normalized/wechat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wechat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender