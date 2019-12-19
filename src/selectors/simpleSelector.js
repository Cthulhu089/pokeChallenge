import { createSelector } from 'reselect'


const shopItemsSelector = state => {
    console.log("!!!!!!", state);
    
    return state
}
const subtotalSelector = createSelector(
    shopItemsSelector,
)

export default subtotalSelector;