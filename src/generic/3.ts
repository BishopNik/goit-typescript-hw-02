/**
 * У вас є функція merge, яка поєднує два об'єкти.
 *   Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
 *
 * @format
 */

function merge<ObjA, ObjB>(objA: ObjA, objB: ObjB): ObjA & ObjB {
	return { ...objA, ...objB };
}

export {};
