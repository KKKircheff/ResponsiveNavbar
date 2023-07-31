export interface Item {
    name: string;
    offset?: number;
    contentPosition: number;
    url?: string;
    children?: Item[];
}

export const items: Item[] = [
    { name: 'Home', url: 'hero-homepage', offset: 0, contentPosition: 1 },
    { name: 'About Me', url: 'about-me-section', offset: -50, contentPosition: 2 },
    { name: 'Memberships', url: 'memberships-container', offset: 100, contentPosition: 3 },
    { name: 'Testimonials', url: 'footer__contact__testimonials-title', offset: -100, contentPosition: 4 },
    { name: 'Contact', url: 'footer__contact-text', offset: -100, contentPosition: 5 },
];

