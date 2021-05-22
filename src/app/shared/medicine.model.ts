export class Medicine {
    constructor(
        public name: string,
        public brand: string,
        public price: number,
        public quantity: number,
        public expiryDate: Date,
        public notes: string) {

        }
}