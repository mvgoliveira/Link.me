import { IconType } from 'react-icons/lib';
import { Container } from './styles';

type InputPropsType = {
	Icon?: IconType;
	placeholder: string;
	id?: string;
	type: React.HTMLInputTypeAttribute;
	value?: string;
	label?: string;
	onCLick?: React.MouseEventHandler<HTMLDivElement>;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	name?: string;
}

function Input({Icon, placeholder, id, onCLick, type, value, onChange, onBlur, onFocus, label, name}: InputPropsType) {
	return (
		<Container onClick={onCLick} hasLabel={label ? true : false}>
			{Icon && <Icon />}
			
			{label && (
				<label htmlFor={id}>{label}</label>
			)}

			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value ? value : ""}
				onChange={onChange}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
		</Container>
	)
}

export {Input}