import {onMounted, onUnmounted, readonly, ref} from "vue";

export const usePlocState = (ploc) => {
    const state = ref(ploc.state)

    const stateSubscription = (newState) => {
        state.value = newState
    }

    onMounted(() => {
        ploc.subscribe(stateSubscription)
    })

    onUnmounted(() => {
        ploc.unsubscribe(stateSubscription)
    })

    return readonly(state)
}
