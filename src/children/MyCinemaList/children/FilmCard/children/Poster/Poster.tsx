import { FC } from 'react';

import { Icon } from '../../../../../../shared/components/Icon';
import { PopcornIcon } from '../../../../../../shared/components/PopcornIcon';
import classes from './Poster.module.css';

export interface PosterProps {
  src: string;
}
export const Poster: FC<PosterProps> = ({ src }) => {
  return (
    <div className={classes.container}>
      {src !== 'N/A' && <img src={src} />}
      {src === 'N/A' && (
        <div className={classes.placeholder}>
          <Icon width={98} height={98} Icon={PopcornIcon}></Icon>
          <span>{src}</span>
        </div>
      )}
    </div>
  );
};
