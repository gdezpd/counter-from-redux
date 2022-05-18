import React, {ChangeEvent, useRef, forwardRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {isEditAC} from "../store/counter-reducer";
// import {message} from "../App";

type MaxIncrementPropsType = {
    name: string
    maxValueHandler: (maxNum: number) => void
    setStatus: React.Dispatch<React.SetStateAction<string>>
}


export const MaxIncrement = forwardRef<HTMLInputElement, MaxIncrementPropsType>(({...props}, ref) => {

    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const messageError = useSelector<AppRootStateType, string>(state => state.counter.message.error)
    const messageDefault = useSelector<AppRootStateType, string>(state => state.counter.message.default)

    const dispatch = useDispatch()

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // props.setStatus(message.error)
        props.maxValueHandler(+e.currentTarget.value)
        if (+e.currentTarget.value >= minValue ) {
            props.setStatus(messageDefault)
            dispatch(isEditAC(false))
        } else {
            props.setStatus(messageError)
        }
    }

    // const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.setStatus(messageError)
    //     props.maxValueHandler(+e.currentTarget.value)
    //     dispatch(isEditAC(false))
    // }

    return (
        <div>
            {props.name}
            <input
                ref={ref}
                value={maxValue}
                onChange={maxValueHandler}
                type="number"
                // onFocus={props.onFocus}
            />
        </div>
    );
})
//
// export const MaxIncrement = (props: MaxIncrementPropsType) => {
//     const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
//
//
//
//     // const dispatch = useDispatch()
//     // const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     //     props.maxValueHandler(+e.currentTarget.value)
//     //     console.log(e.currentTarget.value)
//     // }
//
//
// };
