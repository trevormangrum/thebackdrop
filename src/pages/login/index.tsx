import React from "react";
import Layout from "src/components/Layout";
import Button from "src/components/Button";
import Router from "next/router";
import urls from "utils/urls";
import { NextPageContext } from "next";
export default function AdminLoginPage() {
    const [loginError, setLoginError] = React.useState(false);
    const [values, setValues] = React.useState({});
    const [error, setError] = React.useState(false);
    const handleChange = (e: React.SyntheticEvent) => {
        e.persist();
        const target = e.target as HTMLInputElement;
        setValues(values => ({...values, [target.name]: target.value}));
    }

    const handleSubmit = async (e:React.SyntheticEvent) => {
        e.preventDefault();
        if(!values.username || !values.password) {
            //Must have both to proceed.
           setError(true); 
        } else {
            setError(false);
            const response = await fetch('/api/login', {
                method: "POST",
                body: JSON.stringify(values),
            });
            if(response.status === 200) {
              window.location.reload();
            } else {
              setLoginError(true);
            }
        }
    }
    return (
        <Layout hero={true} heroText="Login">
            <div className="layout-wrapper">
                <form className="login-form">
                    <h3>Login.</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="Username" value={values.username || ""} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" value={values.password || ""} onChange={handleChange}  />
                    {error && <p className="error">You must supply a username and password.</p>
                    }
                    {loginError && <p className="error">Something went wrong with your login. If you are having trouble logging in, please contact the webmaster.</p>
                    }
                    <Button onClick={handleSubmit} text="Login" />
                </form>
            </div>
        </Layout>
    )
}
export async function getServerSideProps(context: NextPageContext) {
  //Code comes from mindversity website. https://github.com/hack4impact-utk/mindversity-website/blob/develop/pages/portal/index.tsx
  const cookie = context.req?.headers.cookie;
  const resp = await fetch(`${urls.baseUrl}${urls.api.admin.validate}`, {
    headers: {
      cookie: cookie!,
    },
  });
  //If the cookie is present and valid, redirect to the admin page.
  if (resp.status === 200 && context.req) {
    return {
      redirect: {
        permanent: false,
        destination: `${urls.baseUrl}${urls.pages.admin.index}`,
      },
    };
  }
  return { props: {} };
}