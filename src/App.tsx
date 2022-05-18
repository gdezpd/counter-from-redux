import React, {useRef, useState} from 'react';import './App.module.css';import {ActionBar} from './Components/ActionBar';import {MaxIncrement} from './Components/MaxIncrement';import {MinIncrement} from './Components/MinIncrement';import {useDispatch, useSelector} from "react-redux";import {AppRootStateType} from "./store/store";import {    applyDataAC,    incCounterValueAC, isEditAC, maxCounterValueAC,    minCounterValueAC} from "./store/counter-reducer";import s from './App.module.css'// export const message = {//     error: 'incorrect value',//     default: "press for apply"// }export const App = () => {    const counter = useSelector<AppRootStateType, number>(state => state.counter.value)    const numMax = useSelector<AppRootStateType, number>(state => state.counter.maxValue)    const numMin = useSelector<AppRootStateType, number>(state => state.counter.minValue)    const isEdit = useSelector<AppRootStateType, boolean>(state => state.counter.isEdit)    const messageError = useSelector<AppRootStateType, string>(state => state.counter.message.error)    const messageDefault = useSelector<AppRootStateType, string>(state => state.counter.message.default)    const dispatch = useDispatch()    const refMax = useRef(null)    const refMin = useRef(null)    const [status, setStatus] = useState('')    const increment = () => {        dispatch(incCounterValueAC())    }    const maxValueHandler = (maxNum: number) => {        dispatch(maxCounterValueAC(maxNum))    }    const minValueHandler = (minNum: number) => {        dispatch(minCounterValueAC(minNum))    }    const onClickButtonHandler = () => {        dispatch(applyDataAC())        dispatch(isEditAC(true))    }    return (        <div className={s.app}>            <div className={`${s.settingsCounter} ${isEdit ? s.counterOutIsNotActive : '' }`}>                <MaxIncrement name={'max.'} maxValueHandler={maxValueHandler} ref={refMax}                              setStatus={setStatus}                />                <MinIncrement name={'min.'} minValueHandler={minValueHandler} ref={refMin}                              setStatus={setStatus}                />                <button                    // disabled={!isEdit}                    onClick={onClickButtonHandler}                    disabled={numMin > numMax || isEdit}                > apply                </button>            </div>            <div className={` ${s.counterOut} ${isEdit ? '': s.counterOutIsNotActive } `}>                <div className={s.counter}>                    {isEdit                        ?                        <div className={counter === numMax ? s.activeValue : ''}>{counter}</div>                        :                        <div className={status === messageError ? s.error : ''}> {status} </div>}                </div>                {/*{counter}*/}                <ActionBar                    counter={counter}                    increment={increment}                />            </div>        </div>    );}