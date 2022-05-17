const initialState = {
    value: 2,
    maxValue: 2,
    minValue: 1,
    isEdit: true,
    message: {
        error: 'incorrect value',
        default: "press for apply"
    }
}

type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "MAX-VALUE":
            return {
                ...state,
                maxValue: action.maxNum
            }
        case "MIN-VALUE":
            return {
                ...state,
                minValue: action.minNum
            }
        case "RES-VALUE":
            return {
                ...state,
                value: action.minNum
            }
        case "APPLY-DATA":
            return {
                ...state,
                value: state.minValue
            }
        case "IS-EDIT":
            return {
                ...state,
                isEdit: action.payload
            }
        // case "IS-EDIT-FALSE":
        //     return { ...state,
        //         isEdit: false
        //     }
        default:
            return state
    }


}

export const incCounterValueAC = () => ({
        type: "INC-VALUE"
    } as const
)
export const incValueLocalStorageAC = () => ({
        type: "INC-LOCAL-STORAGE"
    } as const
)
export const maxCounterValueAC = (maxNum: number) => ({
        type: "MAX-VALUE",
        maxNum
    } as const
)
export const minCounterValueAC = (minNum: number) => ({
        type: "MIN-VALUE",
        minNum
    } as const
)
export const resCounterValueAC = (minNum: number) => ({
        type: "RES-VALUE",
        minNum
    } as const
)
export const applyDataAC = () => ({
        type: "APPLY-DATA",
    } as const
)
export const isEditAC = (payload: boolean) => ({
        type: "IS-EDIT",
        payload
    } as const
)
export const isEditFalseAC = () => ({
        type: "IS-EDIT-FALSE",
    } as const
)

type ActionType = incCounterValueAT | incValueLocalStorageAT |
    minCounterValueAT | maxCounterValueAT | resCounterValueAT |
    applyDataAT | isEditAT

export type incCounterValueAT = ReturnType<typeof incCounterValueAC>
export type incValueLocalStorageAT = ReturnType<typeof incValueLocalStorageAC>
export type minCounterValueAT = ReturnType<typeof minCounterValueAC>
export type maxCounterValueAT = ReturnType<typeof maxCounterValueAC>
export type resCounterValueAT = ReturnType<typeof resCounterValueAC>
export type applyDataAT = ReturnType<typeof applyDataAC>
export type isEditAT = ReturnType<typeof isEditAC>

