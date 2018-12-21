import React from 'react';
import iconSvg from '../icons/normalized/sina-weibo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sina-weibo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender