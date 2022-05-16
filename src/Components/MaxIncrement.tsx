import React, {ChangeEvent, useRef, forwardRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {maxCounterValueAC} from "../store/counter-reducer";

type MaxIncrementPropsType = {
    name: string
    maxValueHandler: (maxNum: number) => void
}


export const MaxIncrement = forwardRef<HTMLInputElement, MaxIncrementPropsType>(({ ...rest }, ref) => {

    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        rest.maxValueHandler(+e.currentTarget.value)
    }
    return (
        <div>
            {rest.name}
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
