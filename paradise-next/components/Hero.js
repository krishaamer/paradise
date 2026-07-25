import { useAuth } from '@/lib/auth/AuthContext';
import { useI18n } from '@/lib/i18n/I18nContext';
import UserInfo from '@/components/UserInfo';
import Supporters from '@/components/Supporters';
import Progress from '@/components/Progress';

export function ParadiseLoggedOut() {
  return (
    <>
      <div className="span2"></div>
      <div className="span9">
        <div className="row">
          <div className="span9 animated fadeIn" id="paradise">
            <img src="/img/paradise.png" alt="Enter Paradise" />
          </div>
        </div>
      </div>
      <div className="span1"></div>
    </>
  );
}

export default function Hero() {
  const { isLoggedIn } = useAuth();
  const { t } = useI18n();
  return (
    <div className="container">
      <div className="row" id="row-hero">
        <div id="hero" className="span12 animated fadeIn">
          <div className="row">
            {isLoggedIn ? (
              <>
                <div className="span2"></div>
                <div className="span8">
                  <div className="row">
                    <div className="span8 animated fadeIn" id="paradise">
                      <Supporters />
                    </div>
                  </div>
                  <div className="row" id="row-progress">
                    <Progress />
                  </div>
                </div>
                <div className="span2"></div>
              </>
            ) : (
              <ParadiseLoggedOut />
            )}
          </div>
          <div className="row">
            {isLoggedIn ? (
              <>
                <div className="span4 offset2">
                  <div id="pledge" className="animated fadeIn">
                    <div className="media">
                      <div className="pull-left">
                        <div id="btn" className="undone">
                          <img src="/img/check.png" id="check" />
                          <span id="dsc">{t('pledge.joinsupporters')}</span>
                        </div>
                      </div>
                      <div className="media-body" id="tick-this-box">
                        {t('pledge.addmoney')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="span4">
                  <div id="why" style={{ opacity: 1 }}>
                    <div style={{ margin: '40px 0 0 0' }}>
                      <form id="myform" onSubmit={(e) => e.preventDefault()}>
                        <input className="span4" type="text" id="updateMessage" maxLength={48} placeholder={t('supporters.whysupporting')} />
                        <input type="submit" id="updateMessageBtn" className="hide" />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="span2"></div>
              </>
            ) : (
              <>
                <div className="span3 offset6">
                  <UserInfo />
                </div>
                <div className="span3"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
