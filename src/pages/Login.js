import { redirect } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import "../css/page.css";
import styles from "../css/Login.module.css";

export async function authLoader() {
  const res = await fetch("/.auth/me");
  const resJ = await res.json();
  const client = resJ.clientPrincipal;
  if (!client) {
    return client;
  }
  return redirect("/");
}

const loginBaseUrl = "/.auth/login/";
const redirectParam = "?post_login_redirect_uri=/login/redirect";

function loginOnClick(url) {
  return () => (window.location.href = loginBaseUrl + url + redirectParam);
}

export default function Login() {
  return (
    <Stack gap={3} className="body">
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <h1 className={styles.h1}>Let Me Cook</h1>
      <h2 className={styles.h2}>A Virtual Pantry Manager & Recipe Tracker!</h2>
      <h3 className={styles.h3}>Login/Signup</h3>
      <div id={styles.buttons}>
        {/* <button className={styles.button+' '+styles.apple} onClick={loginOnClick('apple')}>Apple</button> */}
        {/* <button className={styles.button+' '+styles.google} onClick={loginOnClick('google')}>Google</button> */}
        <button
          className={styles.button + " " + styles.microsoft}
          onClick={loginOnClick("aad")}
        >
          Microsoft
        </button>
        {/* <button className={styles.button+' '+styles.twitter} onClick={loginOnClick('twitter')}>Twitter / X</button> */}
        {/* <button className={styles.button+' '+styles.facebook} onClick={loginOnClick('facebook')}>Facebook</button> */}
        <button
          className={styles.button + " " + styles.github}
          onClick={loginOnClick("github")}
        >
          Github
        </button>
      </div>
    </Stack>
  );
}
