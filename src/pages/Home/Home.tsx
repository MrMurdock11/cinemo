import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BookmarkIcon } from '../../shared/components/BookmarkIcon';
import { Icon } from '../../shared/components/Icon';
import { IconEye } from '../../shared/components/IconEye';
import { IconMovie } from '../../shared/components/IconMovie';
import { SearchIcon } from '../../shared/components/SearchIcon';
import { RootState } from '../../store';
import classes from './Home.module.css';

export const Home = () => {
  const { movies } = useSelector((state: RootState) => state.library);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Link to="/search">
          <Icon width={24} height={24} Icon={SearchIcon} />
        </Link>
      </div>

      <div className={classes.welcome}>Watched</div>
      <div className={classes.banner}>
        <Icon Icon={IconMovie} />
        <div className={classes.count}>{movies.length}</div>
      </div>

      <div className={classes.panel}>
        <div className={classes.tile}>
          <div className={classes['tile-content']}>
            <Icon Icon={IconEye}></Icon>
          </div>
        </div>

        <div className={classes.tile}>
          <div className={classes['tile-content']}>
            <Icon Icon={BookmarkIcon}></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};
