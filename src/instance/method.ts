import type {Method} from '../method';

export interface InstanceMethod<InstanceT> {
	instance: InstanceT;
	method: Method;
	instanced?: boolean;
}
