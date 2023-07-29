import { MembershipCard } from '../membership-card/membership-card.component'
import './memberships-container.styles.scss'

export const MembershipsContainer = () => {

    const subscriptions = [
        {
            type: 'BASIC',
            price: 75,
            options: ['Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance test',
                'Nutritional Guidance'],
        },
        {
            type: 'PREMIUM',
            price: 150,
            options: ['Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance'],
        },
        {
            type: 'ADVANCED',
            price: 300,
            options: ['Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance',
                'Nutritional Guidance'],
        },
    ]
    return (
        <div className='memberships-container'>
            <h1 className="memberships-container__title">Choose your membership plan</h1>
            <div className="memberships-container__tiers">
                {subscriptions.map((subscription, index) => {
                    return <MembershipCard key={index} subscription={subscription} />
                }
                )}
            </div>
        </div>
    )
}
