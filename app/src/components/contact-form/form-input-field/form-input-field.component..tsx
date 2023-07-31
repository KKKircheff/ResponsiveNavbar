import './form-input-field.styles.scss';

type otherProps = {
    onClick?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    value: string;
    type: string;
    name: string;
    autoComplete: string;

}
type Props = {
    // children: React.ReactNode,
    label: string,
} & otherProps

export const FormInputField = ({ label, ...otherProps }: Props) => {
    return (
        <div className='form-input-wrapper'>
            <input className="form-input"{...otherProps} />
            {label &&
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''
                        } form-input-label`}>
                    {label}
                </label>}
        </div>

    )
}
