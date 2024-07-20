import classes from './MyCinemaList.module.css';
import { FilmCard } from "./children/FilmCard"

export const MyCinemaList = () => {
  return (
    <div className={classes.container}>
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
      <FilmCard />
    </div>
  )
}