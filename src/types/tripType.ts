export type Review = {
    dice: 1|2|3|4|5|6;
    text: string;
}

export type Trip = {
    from: string;
    to: string;
    kilometers: number;
    price: number;
    driver: string;
    passenger: string;
    review: Review;
}