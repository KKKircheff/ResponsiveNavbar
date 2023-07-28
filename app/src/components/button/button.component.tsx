import './button.styles.scss';

type otherProps = {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

type Props = {
    children: React.ReactNode,
    buttonType?: 'google-sign-in' | 'inverted'
} & otherProps


export const Button = ({ children, buttonType, ...otherProps }: Props) => {
    return (
        <button className={`button-container ${buttonType}`} {...otherProps}>

            {children}
        </button>
    )
}