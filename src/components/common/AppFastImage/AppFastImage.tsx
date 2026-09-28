import React from 'react';
import FastImage, { FastImageProps, ResizeMode, Priority } from 'react-native-fast-image';

export interface AppFastImageProps extends FastImageProps {

}

export const AppFastImage: React.FC<AppFastImageProps> = ({
  resizeMode = FastImage.resizeMode.contain,
  style,
  ...props
}) => {
  return (
    <FastImage
      resizeMode={resizeMode}
      style={style}
      {...props}
    />
  );
};

export type { ResizeMode, Priority };
export { FastImage as RawFastImage };
