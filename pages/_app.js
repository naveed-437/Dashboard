import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
