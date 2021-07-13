import React from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
interface Props {
  hero?: boolean;
  heroText?: string;
}
const Layout: React.FC<Props> = ({ children, hero, heroText}) => {
  return (
    <main className={`layout`}>
      <Header />
      {hero && heroText && (
        <header className="layout-wrapper hero-spacer">
          <h1 className="page-header">{`${heroText}.`}</h1>
        </header>
      )}
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
