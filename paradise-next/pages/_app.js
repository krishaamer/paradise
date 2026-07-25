// Load the exact legacy CSS via <link> for pixel-perfect parity
import '@/styles/animatable-tooltips.css';
import Script from 'next/script';
import { I18nProvider } from '@/lib/i18n/I18nContext';
import { AuthProvider } from '@/lib/auth/AuthContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Core CSS from CDNs to match legacy visuals */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="/css/paradise.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap-responsive.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
      />

      {/* Load scripts in order */}
      <Script
        src="https://code.jquery.com/jquery-1.11.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        strategy="beforeInteractive"
      />
      {/* Initialize Bootstrap 2 carousels */}
      <Script id="init-bootstrap" strategy="afterInteractive">
        {`
          (function(){
            if (window.jQuery && jQuery.fn && jQuery.fn.carousel) {
              jQuery(function(){ jQuery('.carousel').carousel(); });
            }
          })();
        `}
      </Script>

      <I18nProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </I18nProvider>
    </>
  );
}
