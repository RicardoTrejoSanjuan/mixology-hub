import { useMemo } from 'react';
import { useAppStore } from '../stores/useAppStore'
import DrinkCard from '../components/DrinkCard';

export default function IndexPage() {

  const { drinks } = useAppStore();
  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks])
  return (
    <>
      {
        !hasDrinks ? <h1>Search...</h1> :
          <>
            <h1 className="text-6xl font-extrabold">Drinks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
            {
              drinks.drinks.map(drink => (
                <DrinkCard key={drink.idDrink} drink={drink} />
              ))
            }
            </div>
          </>
      }

    </>
  )
}
