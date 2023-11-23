export const myLogger = store => next => action => {
    console.log('store', store.getState());
    console.log('action', action);
    next(action);
}