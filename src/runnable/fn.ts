/**
 * @category Executor
 */
export type RunnableFn<ArgT, ReturnT> = (...args: ArgT[]) => Promise<ReturnT>;
