const ItemReducer = (data,action) => {
    switch (action.type) {
        case 'initialize':{
            return [...action.payload]
        }
        case 'add' : {
            return [
                ...data,
                action.payload
            ]
        }
        case 'delete' : {
            return data.filter(d=>d.id !== action.payload)
        }
        case 'edit_submit': {
            return data.map(d => d.id === action.payload.id ? action.payload : d)
        }
        default : {
            throw Error("Unknown action "+action.type);
        }
    }
}

export default ItemReducer;