export default function BodyReducer(state = [] , action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return state = [...state , action.value];
        case 'REMOVE_ITEM':
            return state.filter(each => each.id!==action.id);
        default:
            return state;
    }
}