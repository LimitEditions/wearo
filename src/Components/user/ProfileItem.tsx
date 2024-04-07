import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IProfileItem } from '../../types/interfaces/IProfileItem';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

const ProfileItem: React.FC<IProfileItem> = ({ path, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
        className={getStyles(profItStyle)} 
        onClick={() => navigate(location.pathname + path)}>
      {children}
      <span className={getStyles(angleStyle)}>{'>'}</span>
    </div>
  );
};

export default ProfileItem;

const profItStyle: BlockStyle = {
    blockSize: "flex-col items-center max-w-md relative",
    border: "p-3 border border-gray-300 rounded-lg",
    hover: "cursor-pointer hover:bg-gray-50",
    spacing: "my-2",
    text: "text-sm",
};

const angleStyle: BlockStyle = {
    blockSize: "absolute right-1 top-1/2",
    transitionsAnimation: "transform -translate-y-1/2",
    text: "text-lg",
};
