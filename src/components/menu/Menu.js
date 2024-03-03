import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Menu.module.css';


const Menu = () => {
    return (
        <div className={classes.wrap}>

        <ul className={classes.list}>
            <li>
                <NavLink
                    to="/"
                    className={
                        ({ isActive }) => isActive ? classes.active : classes.listItem}
                >Главная</NavLink>
            </li>
            <li>
                <NavLink to="/users"
                         className={
                             ({ isActive }) => isActive ? classes.active : classes.listItem}
                >Users</NavLink>
            </li>
            <li>
                <NavLink to="/count" className={
                    ({ isActive }) => isActive ? classes.active : classes.listItem}>Count</NavLink>
            </li>
        </ul>
            
        </div>
    );
};

export default Menu;