import React from "react";
import Button from "src/components/Button";
const InitialView: React.FC = () => {
    return (
        <>
        <div className="initial-view-overlay"></div>
        <section className="initial-view">
            <div className="initial-view-text">
                <h1 className="initial-view-header">Create your own scene.</h1>
                <p className="initial-view-subheader">Book a session today, only for $25.00/hr.</p>
                <Button href='/book' text="Book Now" />
            </div>
        </section>
        </>
    )

}
export default InitialView;