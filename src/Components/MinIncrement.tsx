import React, {ChangeEvent, forwardRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {minCounterValueAC} from "../store/counter-reducer";

type MinIncrementPropsType = {
    name: string
    minValueHandler: (minNum: number) => void
}


export const MinIncrement = forwardRef<HTMLInputElement, MinIncrementPropsType>(({ ...rest }, ref) => {

    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        rest.minValueHandler(+e.currentTarget.value)
    }
    return (
        <div>
            {rest.name}
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
