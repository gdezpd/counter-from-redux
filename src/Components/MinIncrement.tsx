import React, {ChangeEvent, forwardRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {isEditAC} from "../store/counter-reducer";
// import {message} from "../App";

type MinIncrementPropsType = {
    name: string
    minValueHandler: (minNum: number) => void
    setStatus: React.Dispatch<React.SetStateAction<string>>
}


export const MinIncrement = forwardRef<HTMLInputElement, MinIncrementPropsType>(({...props}, ref) => {

    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const messageError = useSelector<AppRootStateType, string>(state => state.counter.message.error)
    const messageDefault = useSelector<AppRootStateType, string>(state => state.counter.message.default)

    const dispatch = useDispatch()

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // props.setStatus(message.error)
        props.minValueHandler(+e.currentTarget.value)
        if (maxValue >= +e.currentTarget.value ) {
            props.setStatus(messageDefault)
            dispatch(isEditAC(false))
        } else {
            props.setStatus(messageError)
        }

    }
    return (
        <div>
            {props.name}
            <input
                ref={ref}
                value={minValue}
                onChange={minValueHandler}
                type="number"
                // onFocus={props.onFocus}
            />
        </div>
    );
})
//
// export const MinIncrement = (props: MinIncrementPropsType) => {
//     const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
//     const dispatch = useDispatch()
//
//     // const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     //     props.minValueHandler(+e.currentTarget.value)
//     //     // dispatch(minCounterValueAC(+e.currentTarget.value))
//     //     console.log(e.currentTarget.value)
//     // }
//
//     return (
//         <div>
//             {props.name}
//             <input
//                 ref={props.forwardRefMin}
//                 value={minValue}
//                 // onChange={minValueHandler}
//                 type="number"
//                 // onFocus={props.onFocus}
//             />
//         </div>
//     );
// };
