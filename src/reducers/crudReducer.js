import initialState from '../states';

const crudReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE":{
            return state.map(item => {
                if (item.id !== action.Payload.id) {
                    return item;
                }
        
                return {
                    ...item,
                    id: action.Payload.id,
                    name: action.Payload.name,
                    text: action.Payload.text,
                    Status: false
                }
            });
        }

        case "CREATE":{
            return [
                ...state,
                {
                    id: state.length,
                    name: action.Payload.name,
                    text: action.Payload.text,
                    status: false
                }
            ];
        }

        case "DELETE":{
            return state.filter((item) => item.id !== action.Payload.id);
        }

        default:{
            return state;
        }
    }
}

export default crudReducer;