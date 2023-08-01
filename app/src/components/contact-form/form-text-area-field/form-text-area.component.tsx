import './form-text-area.styles.scss';

export const FormTextArea = ({ label = '', ...otherProps }) => {
    return (
        <div className='form-text-area__wrapper'>
            <textarea className="form-text-area__wrapper__input" {...otherProps} />
            {label &&
                <label
                    className={`form-text-area__wrapper__label ${otherProps.value.length ? 'form-text-area__wrapper__label--shrink' : ''}`}>
                    {label}
                </label>}
        </div>
    );
}

