/**
 * У вас є функція merge, яка поєднує два об'єкти.
 *   Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
 *
 * @format
 */

function merge<A extends object, B extends object>(objA: A, objB: B): A & B {
	return { ...objA, ...objB };
}

export {};
