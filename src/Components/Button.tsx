import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    // onClick?: () => void
    // isDisabled?: boolean
}

export const Button = (props: ButtonType) => {

    return (
        <div>
            <button className={s.button}
                    // disabled={props.isDisabled}
                    // onClick={props.onClick}
            >{props.name}</button>
        </div>
    )
}