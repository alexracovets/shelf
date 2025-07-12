"use client";

export const DefaoultTeamplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {children}
        </div>
    )
};