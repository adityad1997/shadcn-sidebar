import { Metadata } from "next";
import NavbarComponent from "../components/Navbar";
import { SidebarMenu } from "../components/Sidebar";

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page',
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <NavbarComponent />
            <div className="flex flex-1 overflow-hidden">
                <aside className="hidden sm:block min-w-60 bg-white border-r shadow-sm">
                    <SidebarMenu />
                </aside>
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default RootLayout;
