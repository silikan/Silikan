import { ref, readonly, watchEffect } from "vue";
/**
 * Create an asynchronous computed dependency
 *
 * @param callback     The promise-returning callback which generates the computed value
 * @param defaultValue A default value, used until the first evaluation finishes
 * @returns A two-item tuple with the first item being a readonly ref to the computed value and the second item holding a boolean ref, indicating whether the async computed value is currently (re-)evaluated
 */
export default function useAsyncComputed(callback, defaultValue) {
    let counter = 0;
    const current = ref(defaultValue);
    const evaluating = ref(false);
    watchEffect(async(onInvalidate) => {
        counter++;
        const counterAtBeginning = counter;
        let hasFinished = false;
        try {
            // Defer initial setting of `evaluating` ref
            // to avoid having it as a dependency
            Promise.resolve().then(() => {
                evaluating.value = true;
            });
            const result = await callback((cancelCallback) => {
                onInvalidate(() => {
                    evaluating.value = false;
                    if (!hasFinished) {
                        cancelCallback();
                    }
                });
            });
            if (counterAtBeginning === counter) {
                current.value = result;
            }
        } finally {
            evaluating.value = false;
            hasFinished = true;
        }
    });
    return [readonly(current), readonly(evaluating)];
}