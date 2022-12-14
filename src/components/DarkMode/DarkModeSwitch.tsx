import React, {FC} from 'react';
import {ThemeModeType} from "../../App";
import {Moon, Sun} from "./SetTheme";
import {Switch} from "@mui/material";
import styles from "./DarkMode.module.scss"
import {useAppDispatch} from "../../hooks/reduxHooks";
import {themeToggle} from "../../features/app/appSlice";


type TodoPropsType = {
    theme: ThemeModeType
}
export const DarkModeSwitch: FC<TodoPropsType> = ({theme}) => {
    const dispatch = useAppDispatch()

    const darkModeToggle = () => {
        dispatch(themeToggle())
    }
    return (
        <div className={styles.switchBox}>

            <Switch onChange={darkModeToggle} checked={theme === "dark"}/>
            {
                theme === "light" ?
                    <Moon/>
                    :
                    <Sun/>

            }


        </div>
    );
};

