import { ChangeEventHandler } from "react";
import {
	$List,
	$ListItem,
	$Value,
	$Control,
	$Controls,
	$Header,
} from "./NestedList.styles";
import { TNestedItem } from "./NestedList.hoc";

export interface NestedListProps {
	root: TNestedItem;
	
	onAppendItem: (item: TNestedItem) => void;
	onRemoveItem: (item: TNestedItem) => void;
	onUpdateItem: (item: TNestedItem, value: string) => void;
}

export const NestedList: React.FC<NestedListProps> = ({ 
	root,

	onAppendItem,
	onRemoveItem,
	onUpdateItem,
}) => {
	return (
		<Node
			root={root}
			removable={false}
			onAppendItem={onAppendItem}
			onRemoveItem={onRemoveItem}
			onUpdateItem={onUpdateItem}
		/>
	);
};

interface NodeProps extends NestedListProps {
	removable: boolean;
}

const Node: React.FC<NodeProps> = ({
	root,
	removable,

	onAppendItem,
	onRemoveItem,
	onUpdateItem,
}) => {
	const handleValueChange: ChangeEventHandler<HTMLInputElement> = (e) =>
		onUpdateItem(root, e.target.value);
	const handleAppendItem = () => onAppendItem(root);
	const handleRemoveItem = () => onRemoveItem(root);

	const hasChildren = root.children.length > 0;

	return (
		<$ListItem $removable={removable}>
			<$Header>
				<$Value value={root.value} onChange={handleValueChange} />

				<$Controls>
					<$Control onClick={handleAppendItem}>+ Add child</$Control>
					
					{removable && (
						<$Control onClick={handleRemoveItem}>- Delete</$Control>
					)}
				</$Controls>
			</$Header>

			{hasChildren && (
				<$List>
					{root.children.map((item) => (
						<Node
							root={item}
							onUpdateItem={onUpdateItem}
							onAppendItem={onAppendItem}
							onRemoveItem={onRemoveItem}
							key={item.id}
							removable
						/>
					))}
				</$List>
			)}
		</$ListItem>
	);
};
