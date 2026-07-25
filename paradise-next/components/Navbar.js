import { useI18n } from '@/lib/i18n/I18nContext';
import { useAuth } from '@/lib/auth/AuthContext';

export default function Navbar() {
  const { t, setLang, lang } = useI18n();
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div className="navbar navbar-fixed-top navbar-inverse" id="navbar">
      <div className="navbar-inner">
        <div className="container">
          <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <a className="brand" href="#">TOMÉ</a>
          <div className="nav-collapse collapse">
            <ul className="nav">
              <li><a href="#hero">{t('navbar.earlyaccess')}</a></li>
              {isLoggedIn && (
                <li className="animated fadeInDown"><a href="#private">{t('navbar.privatearea')}</a></li>
              )}
              <li><a href="#movie">{t('navbar.themovie')}</a></li>
              <li><a href="#flipboard">{t('navbar.featuredartists')}</a></li>
              <li><a href="#art-gallery">{t('navbar.gallery')}</a></li>
              <li><a href="#ipad">{t('navbar.ipadapp')}</a></li>
            </ul>
            <ul className="nav pull-right">
              {isLoggedIn ? (
                <li className="animated fadeInDown"><a onClick={logout} style={{ cursor: 'pointer' }}>{t('navbar.logout')}</a></li>
              ) : (
                <li className="animated fadeInDown"><a onClick={login} style={{ cursor: 'pointer' }}>{t('navbar.login')}</a></li>
              )}
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">{t('lang.language')} ({lang.toUpperCase()})</a>
                <ul className="dropdown-menu" id="lang-choice-menu">
                  <li id="lang-en" className="lang-choice"><a onClick={() => setLang('en')}>{t('lang.english')}</a></li>
                  <li id="lang-pt" className="lang-choice"><a onClick={() => setLang('pt')}>{t('lang.portuguese')}</a></li>
                  <li id="lang-ee" className="lang-choice"><a onClick={() => setLang('ee')}>{t('lang.estonian')}</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
