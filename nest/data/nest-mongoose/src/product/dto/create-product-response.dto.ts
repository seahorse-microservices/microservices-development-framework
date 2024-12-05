import mongoose from 'mongoose';

export class CreateProductResponse  {
    id: mongoose.Types.ObjectId;
    name: string;
    reference: number;
    price: number;
 
}
