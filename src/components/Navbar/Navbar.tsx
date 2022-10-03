import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../redux/reducers/userSlice';
import { RootState } from '../../redux/store';
import styles from './Navbar.module.css';
import PostLogo from  '../../shared/assets/images/Post_logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  console.log("mavbar user selector",user);
  const onLogOut = () => {
    dispatch(resetUser());
  }
  return (
    <div className={`${styles.navbar_container}`}>
      <nav className={`${styles.navbar} ${styles.navbar}`} >
        <img src={PostLogo} alt="" width={'60px'}/>
        <ul className={`${styles.menu_list_content}`} >
          <li className={`${styles.menu_list_item}`}  ><Link to={'/home'}>Home</Link></li>
          <li className={`${styles.menu_list_item}`}><Link to={'/about'}>About</Link></li>
        </ul>
      <div className={`${styles.profile_content}`} >
        <img className={`${styles.profile_image}`} src={user.picture} alt=""/>
        <div className={`${styles.profile_text}`} >
          <div>Hi, {user.given_name}</div>
          <button className={`${styles.profile_btn}`} onClick={onLogOut}>Sign Out</button>
        </div>
      </div>
      </nav>
    </div>
  )
}

export  {Navbar}