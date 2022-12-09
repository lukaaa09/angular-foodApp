import { IShooping } from './shooping-model';

export interface IRecipe {
    name: string,
    description: string,
    imagePath: string,
    ingredients: IShooping[]
}
