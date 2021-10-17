import Proptypes from 'prop-types';
import styles from '../scss//page-projects/games.module.scss'

const GameItem = (props) => {
    return(
        <>
            <div className={styles.cover_wrapper}>
                <figure>
                    <img className={styles.game_item} src={props.gameCoverUrl} />
                </figure>
            </div>
        </>
    );
}

GameItem.Proptypes = {
    gameCoverUrl: Proptypes.string.isRequired,
}
export default GameItem;