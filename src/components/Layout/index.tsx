import React from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
const Layout: React.FC = ({children}) => {
    return (
        <main className="layout">
            <Header/>
                {children}
            <Footer/>
        </main>
    )
} 
export default Layout;