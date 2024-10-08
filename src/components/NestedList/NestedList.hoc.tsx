import { useReducer, useState } from "react";
import { NestedList } from "./NestedList";

export type TNestedItem = {
	id: number;
	parent: TNestedItem | null;
	value: string;
	children: TNestedItem[];
};

export interface NestedListHOCProps {}

export const NestedListHOC: React.FC<NestedListHOCProps> = () => {
	const [, rerender] = useReducer((v) => v + 1, 0);

	const [root] = useState<TNestedItem>({
		id: 0,
		parent: null,
		children: [],
		value: "",
	});

	const [maxId, setMaxId] = useState(0);

	const appendItem = (parent: TNestedItem): void => {
		const item = {
			id: maxId + 1,
			children: [],
			value: "",
			parent,
		};

		setMaxId(v => v + 1);

		parent.children.push(item);
	};

	const removeItem = (child: TNestedItem): void => {
		const parent = child.parent;

		if (!parent) throw new Error("Trying to reach parent that do not exist");

		const childIndex = parent.children.findIndex((item) => item.id === child.id);
		parent.children = parent.children.toSpliced(childIndex, 1);
		
		rerender();
	};

	const updateItem = (item: TNestedItem, value: string): void => {
		item.value = value;
		rerender();
	};

	return (
		<NestedList
			root={root}
			onAppendItem={appendItem}
			onRemoveItem={removeItem}
			onUpdateItem={updateItem}
		/>
	);
};
