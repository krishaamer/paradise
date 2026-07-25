import { useAuth } from '@/lib/auth/AuthContext';
import { useI18n } from '@/lib/i18n/I18nContext';

export default function UserInfo() {
  const { isLoggedIn, login } = useAuth();
  const { t } = useI18n();

  if (isLoggedIn) {
    return (
      <div className="animated fadeIn" id="you-have-subscribed">
        <h3 style={{ marginBottom: 0 }}>{t('user.youhaveloggedin')}</h3>
        <p>{t('user.congrats')}</p>
      </div>
    );
  }

  return (
    <div className="animated fadeIn">
      <div id="login" className="animated tada button" onClick={login} style={{ cursor: 'pointer' }}>
        <span>{t('user.entrance')}</span>
      </div>
    </div>
  );
}

