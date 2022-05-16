import React from 'react';
import s from './Counter.module.css';

type ActionBarType = {
    counter: number
}

export const Counter = (props: ActionBarType) => {

    return <div>
        {props.counter}
    </div>
}