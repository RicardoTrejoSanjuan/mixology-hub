import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import type { SearchFilter } from "../types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useAppStore } from "../stores/useAppStore";

export default function FormIndex() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<SearchFilter>();

    const { categories, searchRecipes } = useAppStore();

    const submit = (data: SearchFilter) => {
        searchRecipes(data);
        reset();
    }
    return (
        <form
            onSubmit={handleSubmit(submit)}
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
                <label
                    htmlFor="ingredient"
                    className="block text-white uppercase font-extrabold text-lg" >
                    Name or Ingredients
                </label>
                <input
                    type="text"
                    id="ingredient"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Name or Ingredients. Ex. Vodka, Tequila, Coffee"
                    {
                    ...register('ingredient', {
                        required: 'Ingredient is a required field.'
                    })
                    } />
                {errors.ingredient && (<ErrorMessage>{errors.ingredient?.message}</ErrorMessage>)}
            </div>
            <div className="space-y-4">
                <label
                    htmlFor="category"
                    className="block text-white uppercase font-extrabold text-lg" >
                    Category
                </label>
                <select
                    id="category"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    {
                        ...register('category', {
                            required: 'Category is a required field.'
                        })
                    }>
                    <option value=""> - Select Category - </option>
                    {
                        categories.drinks.map((drink, index) => (
                            <option key={index} value={drink.strCategory}>{ drink.strCategory }</option>
                        ))
                    }
                </select>
                {errors.category && (<ErrorMessage>{errors.category?.message}</ErrorMessage>)}
            </div>
            <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
                <span>SEARCH</span>
                <MagnifyingGlassIcon className="h-5 w-5 text-white fond-extrabold" />
            </button>
            {/* <input
                type="submit"
                value="Search"
                className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-extrabold w-full rounded-lg uppercase py-2 px-4" /> */}
        </form>
    )
}
