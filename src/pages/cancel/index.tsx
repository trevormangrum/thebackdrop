import React from "react";
import Layout from "src/components/Layout";
import Button from "src/components/Button";
export default function CancelPage() {
    return (
        <Layout hero={true} heroText="We're Sorry to See You Go">
            <div className="layout-wrapper">
                <p>Your appointment has successfully been canceled.</p>
                <Button href="/" text="Return Home"/>
            </div>
        </Layout>
    )
}