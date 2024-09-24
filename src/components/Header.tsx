import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import FormIndex from "./FormIndex";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {

    // ? podemos ver el objeto completo de location al cambiar entre paths
    // const location  = useLocation();
    // console.log('location :', location);

    const { pathname }  = useLocation();
    const isHome = useMemo(() => pathname === '/', [pathname])

    // const fetchCategories = useAppStore((state) => state.fetchCategories);
    const { fetchCategories } = useAppStore();

    useEffect(() => { fetchCategories() }, [])
    

    return (
        <header className={isHome ? 'bg-header bg-cover bg-center': 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-5">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                            to="/">Home</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}
                            to="/favorites">Favorites</NavLink>
                    </nav>
                </div>
                {
                    isHome && <FormIndex /> 
                }
            </div>
        </header>
    )
}
