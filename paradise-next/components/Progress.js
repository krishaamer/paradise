import { useI18n } from '@/lib/i18n/I18nContext';

export default function Progress({ percent = 60, euros = 9000 }) {
  const { t } = useI18n();
  const pct = `${percent}%`;
  const euroStr = `€${euros.toLocaleString('en-US')}`;
  return (
    <div id="progress" className="span8 animated fadeIn">
      <div className="progress progress-striped" style={{ height: 40, overflow: 'visible' }}>
        <div className="bar" style={{ width: pct }}>
          <div className="pctraised">
            <a href="#" className="tip-trigger tipFadeUp" style={{ color: '#fff' }}>
              <span>{euroStr} </span>
              {pct}
            </a>
          </div>
        </div>
        <div className="pctraised" style={{ color: '#000', textAlign: 'center', textTransform: 'uppercase' }}>
          €15.000 {t('progress.tofinishproject')}
        </div>
      </div>
    </div>
  );
}

