import React from 'react';
import iconSvg from '../icons/normalized/backup-restore.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__backup-restore" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender