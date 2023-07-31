import './form-text-area.styles.scss';


export const FormTextArea = ({ label = '', ...otherProps }) => {
    return (
        <div className='form-textarea-wrapper'>
            <textarea className="form-textarea"{...otherProps} />
            {label &&
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''
                        } form-textarea-label`}>
                    {label}
                </label>}
        </div>

    )
}