export default function InputReducer(state = '', action) {
    switch (action.type) {
        case 'HANDLE_CHANGE':
            return action.value;
        default:
            return state;
    }
}