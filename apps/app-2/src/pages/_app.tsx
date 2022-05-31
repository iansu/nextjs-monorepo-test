import "../styles/globals.css";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return <Component {...pageProps} />;
}

export default App;
