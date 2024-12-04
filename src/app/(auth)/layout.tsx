interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({children}:AuthLayoutProps)=> {
    return (
        <div className="flex flex-col gray-y-4">
            <nav className="w-full bg-red-500">Auth navbar</nav>
            {children}
        </div>
    )
}

export default AuthLayout;