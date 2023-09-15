import {useState, useEffect} from "react"
import styles from "./header.module.scss"
import image from "../../assets/images/Logo (1).png"
import menu from "../../assets/images/Menu.png"
import { BiSearch } from "react-icons/bi";
export default function Header() {
    const [opened, setOpened] = useState(false)
    const toggler = () => {
        setOpened(prev=>!prev)
    }
    const style = {
        display: opened ? 'flex' : 'none',
        '@media (minWidth: 48em)': {
            display:'none'
        }
    }
    const updateStyles = (mediaQuery: {matches: boolean;}) => {
        if(mediaQuery.matches){
            setOpened(false);
        }
    }
    useEffect(() => {
    
        // Define the media query you want to check
        const mediaQuery = window.matchMedia('(min-width: 48em)');
    
        // Call the updateStyles function initially
        updateStyles(mediaQuery);
    
        // Add a listener to update styles when the media query status changes
        mediaQuery.addListener(updateStyles);
    
        // Clean up the listener when the component unmounts
        return () => {
          mediaQuery.removeListener(updateStyles);
        };
      }, []);
  return (
    <>
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={image} alt="logo" />
            </div>
            <form className={styles.desktop__nav}>
                <div className={styles.input__container}>
                    <input type='text' placeholder='Search'/>
                    <span className={styles.icon}>
                        <BiSearch/>
                    </span>
                </div>
            </form>
            <div className={styles.nav}>
                <p>Sign In</p>
                <img src={menu} onClick={toggler} />
            </div>
        </header>
        <form style={style} className={styles.mobile__nav}>
            <div className={styles.input__container}>
                <input type='text' placeholder='Search'/>
                <span className={styles.icon}>
                    <BiSearch/>
                </span>
            </div>
            <p>Sign In</p>
        </form>
    </>
  )
}
