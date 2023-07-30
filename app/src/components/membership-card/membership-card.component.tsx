import { Button } from '../button/button.component'
import './membership-card.styles.scss'
import check from '../../assets/check.svg';
type Props = {
    subscription: {
        type: string,
        price: number,
        options: string[],
    }
}

export const MembershipCard = ({ subscription }: Props) => {

    const { type, price, options } = subscription;
    const getStarted = () => console.log('Get started!')
    return (
        <div className='membership-card'>
            <h1 className="membership-card__title">{type}</h1>
            <div className="membership-card__price-block">
                <h1>€{price}</h1>
                <p>per month</p>
            </div>
            <div className="membership-card__description-block">
                {options.map((option, index) => {
                    return (
                        <div key={index}>
                            <img src={check} alt="" />
                            <p>{option}</p>
                        </div>
                    )
                })}
            </div>
            <div className="membership-card__button">
                <Button buttonType="inverted"
                    onClick={getStarted}
                    style={{ width: 200, height: 45, fontSize: 17 }}
                >
                    Get started
                </Button>
            </div>
        </div>
    )
}