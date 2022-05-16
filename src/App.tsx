import React, {useRef} from 'react';
import './App.css';
import {ActionBar} from './Components/ActionBar';
import {MaxIncrement} from './Components/MaxIncrement';
import {MinIncrement} from './Components/MinIncrement';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {applyDataAC, incCounterValueAC, maxCounterValueAC, minCounterValueAC} from "./store/counter-reducer";


export const App = () => {

    const counter = useSelector<AppRootStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)

    const dispatch = useDispatch()
    const refMax = useRef(null)
    const refMin = useRef(null)

    const increment = () => {
        dispatch(incCounterValueAC())
    }

    const maxValueHandler = (maxNum: number) => {
        dispatch(maxCounterValueAC(maxNum))
    }

    const minValueHandler = (minNum: number) => {
        dispatch(minCounterValueAC(minNum))
    }

    const onClickButtonHandler = () => {
        dispatch(applyDataAC())
    }

    return (
        <div className="app">
            <div className={"settingsCounter"}>
                <MaxIncrement name={'max.'} maxValueHandler={maxValueHandler} ref={refMax}/>
                <MinIncrement name={'min.'} minValueHandler={minValueHandler} ref={refMin}/>
                <button
                    // disabled={!isEdit}
                    onClick={onClickButtonHandler}
                >Применить
                </button>
            </div>

            <div className={"counterOut"}>

                {counter}

                <ActionBar
                    counter={counter}
                    increment={increment}
                />
            </div>
        </div>
    );
}