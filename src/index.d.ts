type ValueOrFunction<TValue> = TValue | ((value: TValue) => TValue);

type ActionStateHelpers<TState> = {
	assign: <TState>(...values: Array<ValueOrFunction<TState>>) => ValueOrFunction<TState>;
};

export type MonoStoreState<TState> = {
	value: ValueOrFunction<TState>;
};

export type DispatchEventPayload = {
	states: any;
	action: any;
};

export type ActionDispatchEvent = (payload: DispatchEventPayload) => void;
export type StateChangedEvent<TState> = (state: MonoStoreState<TState>) => void;
export type StateTransformer<TState> = (
	currentState: ValueOrFunction<TState>,
	newState: ValueOrFunction<TState>,
	...args: any
) => TState;

export interface StoreConfiguration<TState> {
	debounce?: number;
	helpers?: any;
	noChange?: any;
	transform?: StateTransformer<TState>;
	onStateChanged?: StateChangedEvent<TState>;
	onActionDispatching?: ActionDispatchEvent;
	onActionDispatched?: ActionDispatchEvent;
}

export type StoreConfigurationParams =
	| Partial<StoreConfiguration>
	| ((configs: Partial<StoreConfiguration>) => Partial<StoreConfiguration>);

/**
 *
 * @param options
 */
function configure<TState>(options?: StoreConfigurationParams<TState>): StoreConfiguration<TState> {}

/**
 * TODO: Strong type compose()
 * @param functions
 */
function compose(...functions: any): any {}

export type AccessorFunction<TState> = (
	value: ValueOrFunction<TState>,
	...args: any
) => AccessorFunction<TState> | TState;

function createAccessor<TState>(state: MonoStoreState<TState>, accessorBag: AccessorFunction[]) {}
