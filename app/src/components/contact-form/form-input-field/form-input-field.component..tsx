import './form-input-field.styles.scss';

type otherProps = {
    onClick?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    value: string;
    type: string;
    name: string;
    autoComplete: string;
};

type Props = {
    label: string;
} & otherProps;

export const FormInputField = ({ label, ...otherProps }: Props) => {
    return (
        <div className='form-input__wrapper'>
            <input className="form-input__wrapper__input" {...otherProps} />
            {label &&
                <label
                    className={`form-input__wrapper__label ${otherProps.value.length ? 'form-input__wrapper__label--shrink' : ''}`}>
                    {label}
                </label>}
        </div>
    );
};