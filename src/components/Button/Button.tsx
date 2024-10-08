import { ButtonTitle } from "./Button.styles";

export interface ButtonProps extends React.PropsWithChildren {
	className?: string;
	title: string
};

export const ButtonComponent: React.FC<ButtonProps> = ({ className, children, title }) => {
	return (
		<button className={className}>
			<ButtonTitle>
				{title}
			</ButtonTitle>
			{children}
		</button>
	);
};