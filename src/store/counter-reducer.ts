const initialState = {
    value: 5,
    maxValue: 5,
    minValue: 1,
}

type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "MAX-VALUE":
            return { ...state,
                maxValue: action.maxNum
            }
        case "MIN-VALUE":
            return { ...state,
                minValue: action.minNum
            }
        case "RES-VALUE":
            return { ...state,
                value: action.minNum
            }
        case "APPLY-DATA":
            return { ...state,
                value: state.minValue
            }
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

type ActionType = incCounterValueAT | incValueLocalStorageAT | minCounterValueAT | maxCounterValueAT | resCounterValueAT | applyDataAT

export type incCounterValueAT = ReturnType<typeof incCounterValueAC>
export type incValueLocalStorageAT = ReturnType<typeof incValueLocalStorageAC>
export type minCounterValueAT = ReturnType<typeof minCounterValueAC>
export type maxCounterValueAT = ReturnType<typeof maxCounterValueAC>
export type resCounterValueAT = ReturnType<typeof resCounterValueAC>
export type applyDataAT = ReturnType<typeof applyDataAC>

