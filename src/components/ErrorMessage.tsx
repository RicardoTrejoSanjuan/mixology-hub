export default function ErrorMessage({children}: {children: React.ReactNode}) {
    return (
        <div className="relative">
            <div className="absolute top-0 left-2 w-4 h-4 bg-red-500 rotate-45 transform -translate-y-2"></div>
            <div className="bg-red-500 text-white p-3 rounded shadow-md mt-2">
                <p className="font-bold">{children}</p>
            </div>
      </div>
    )
}