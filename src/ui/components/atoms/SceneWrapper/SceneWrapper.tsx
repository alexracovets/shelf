export const SceneWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full">
            {children}
        </div>
    )
}