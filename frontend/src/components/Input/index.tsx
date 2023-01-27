import { IconType } from 'react-icons/lib';
import { Container } from './styles';

type InputPropsType = {
	Icon?: IconType;
	placeholder: string;
	id?: string;
	type: React.HTMLInputTypeAttribute;
	value?: string;
	onCLick?: React.MouseEventHandler<HTMLDivElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

function Input({Icon, placeholder, id, onCLick, type, value, onChange, onBlur}: InputPropsType) {
	return (
		<Container onClick={onCLick}>
			{Icon && <Icon />}

			<input
				type={type}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</Container>
	)
}

export {Input}