import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../redux/reducers/userSlice';
import { RootState } from '../../redux/store';
import styles from './Navbar.module.css';
import PostLogo from  '../../shared/assets/images/Post_logo.svg'

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  console.log("mavbar user selector",user);
  const onLogOut = () => {
    dispatch(resetUser());
  }
  return (
    <div>
      <nav className={styles.navbar} >
        <img src={PostLogo} alt="" width={'60px'}/>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li onClick={onLogOut}>Log out</li>
        </ul>
      <div>
        <img src={user.picture} alt="" width={'40px'} />
        <div>Hi, {user.given_name}</div>
      </div>
      </nav>
    </div>
  )
}

export  {Navbar}