import Link from 'next/link'
import styles from '../styles/nav.module.css'


const Nav = () => {
    return(
        <div className = {styles.main}>
            <ul className={styles.ul}>
                <li>
                    <Link href="/" replace>
                        <a>item 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills" replace>
                        <a>item 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/formation" replace>
                        <a>item 3</a>
                    </Link>
                </li>
                <li>
                    item 4
                </li>
            </ul>
        </div>
    );
}

export default Nav