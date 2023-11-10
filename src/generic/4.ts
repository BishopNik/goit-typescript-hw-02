/**
 * Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
 *
 * @format
 */

// interface T {
// 	title: string;
// }
// class Component<T> {
// 	constructor(public props: T) {}
// }

// class Page extends Component<T> {
// 	pageInfo() {
// 		console.log(this.props.title);
// 	}
// }

interface IProps {
	title: string;
}
class Component<T> {
	constructor(public props: T) {}
}

class Page extends Component<IProps> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export {};
