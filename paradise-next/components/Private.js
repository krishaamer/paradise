import { useI18n } from '@/lib/i18n/I18nContext';

export default function Private() {
  const { t } = useI18n();
  return (
    <div className="container">
      <div id="private" className="animated fadeIn" style={{ marginBottom: 20 }}>
        <div className="row" id="row-private-header">
          <div className="span12 private" id="private-header">
            <div>
              <h1 className="animated fadeIn" id="title-private-area">{t('private.secret')}</h1>
            </div>
          </div>
        </div>
        <div className="row" id="row-private">
          <div className="container private" style={{ padding: '20px 0', height: 650 }}>
            <div className="span2"></div>
            <div className="span8" id="private-inner">
              <ul className="nav nav-tabs">
                <li className="active"><a href="#home" data-toggle="tab">{t('private.watchmovie')}</a></li>
                <li><a href="#story" data-toggle="tab">{t('private.storychapters')}</a></li>
                <li><a href="#budget" data-toggle="tab">{t('private.goalbudget')}</a></li>
                <li><a href="#tedx" data-toggle="tab" style={{ textTransform: 'none' }}>TEDx</a></li>
                <li style={{ borderLeft: '2px solid #fff', paddingLeft: 13 }}><a href="#payments" data-toggle="tab">{t('private.payments')}</a></li>
                <li><a href="#messages" data-toggle="tab">{t('private.messages')}</a></li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane active animated fadeIn" id="home">
                  <h3>{t('private.hello')}</h3>
                  <h6>{t('private.youareseeingthis')}</h6><br />
                  <h6>{t('private.alwaysconstructed')}</h6><br />
                  <h6>{t('private.becauseunfinished')}</h6><br />
                  <h6>{t('private.raisingfifteenk')}</h6><br />
                  <h6>
                    <a href="#watchMovieModal" id="watchMovieModalButton" role="button" className="btn btn-large btn-warning" data-toggle="modal"><i className="icon-play"></i> {t('private.watchcurrentcut')}</a> {t('private.updatedwhen')}<br /><br />
                    -- Kris
                  </h6>

                  <div id="watchMovieModal" style={{ background: '#000', border: '2px solid #fff', width: 1180, height: 710, margin: '-364px 0 0 -590px' }} className="modal hide fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-header" style={{ border: 0, height: 0 }}>
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body animated fadeIn" style={{ maxHeight: 800 }}>
                      <iframe id="player-iframe" style={{ border: '10px solid #000', marginLeft: 5 }} src="http://player.vimeo.com/video/63993839?api=1&amp;player_id=player-iframe" width="1120" height="630" frameBorder="0" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>

                <div className="tab-pane animated fadeIn" id="budget">
                  <div>
                    <h3>{t('budget.why')}</h3>
                    <h6 dangerouslySetInnerHTML={{ __html: t('budget.whycontent') }} />
                    <br /><br />
                    <h6>
                      <a href="#budgetModal" role="button" className="btn btn-large btn-warning" data-toggle="modal"><i className="icon-table"></i> {t('budget.analysebudget')} </a> {t('private.updatedwhen')}
                    </h6>
                    <br /><br />
                  </div>
                  <div id="budgetModal" className="modal hide fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-header" style={{ border: 0, height: 0 }}>
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h3 id="myModalLabel" style={{ textAlign: 'center', color: '#000' }}>{t('budget.budget')}</h3>
                    </div>
                    <div className="modal-body animated fadeIn" style={{ maxHeight: 800 }}>
                      <table className="table" style={{ color: '#000' }}>
                        <thead>
                          <tr>
                            <th>{t('budget.activity')}</th>
                            <th style={{ width: 100 }}>Kulu</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Filmida 30min juurde praegusele 42min lõikele, et saavutada 72min feature-pikkus...</td>
                            <td>7500 EUR</td>
                          </tr>
                          <tr>
                            <td>iPad äpi loomine... vajan abi disainis.</td>
                            <td>3500 EUR</td>
                          </tr>
                          <tr>
                            <td>Muusika-litsentsid, heli uuesti-lindistamine, professionaalne montaaž...</td>
                            <td>1500 EUR</td>
                          </tr>
                          <tr>
                            <td>Keskonna-portree stiilis fotod igast kunstnikust...</td>
                            <td>750 EUR</td>
                          </tr>
                          <tr>
                            <td>Tõlkimine 5 lisa-keelde...</td>
                            <td>750 EUR</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th style={{ textAlign: 'right' }}>Kokku:</th>
                            <th>15 000 EUR</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="tab-pane animated fadeIn" id="tedx">
                  <div>
                    <h3>{t('tedx.tedx')}</h3>
                    <div className="pull-right">
                      <img src="/img/tedx-team.jpg" className="img-rounded" style={{ width: 400, margin: '0 0 5px 15px' }} />
                    </div>
                    <h6>
                      <span dangerouslySetInnerHTML={{ __html: t('tedx.tedxcontent') }} />
                      <i className="icon-map-marker"></i> {t('tedx.tedxdatelocation')} <br /><br />
                    </h6>
                  </div>
                </div>

                <div className="tab-pane animated fadeIn" id="messages">
                  <div>
                    <div><h3>{t('private.messages')} <i className="icon-comments"></i></h3></div>
                    <div className="pull-right" style={{ background: '#fff', width: 480, borderRadius: 7, margin: 0 }}>
                      <div style={{ width: 460, padding: 10, background: '#0b8cbe', borderRadius: '7px 7px 0 0', textAlign: 'center' }}>
                        <strong>{t('private.privatemessages')}</strong>
                      </div>
                      <div style={{ width: 450 }}>
                        <table className="table">
                          <tbody>
                            <tr>
                              <td style={{ border: 0, color: '#000' }}><strong>Example message:</strong> Dude, your film is fantastic. Can you send me some unique goodies I can get no-where else? I want to give you money in return so you can continue your artistic career!</td>
                            </tr>
                            <tr>
                              <td style={{ border: 0, color: 'green' }}>Yay! Go right ahead and poke the 1-click payment button!</td>
                            </tr>
                            <tr>
                              <td style={{ border: 0, color: '#000' }}>Cheers mate!</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div style={{ padding: 7, background: '#0b8cbe', borderRadius: 7 }}>
                        <form className="form-horizontal">
                          <div>
                            <textarea disabled rows={3} style={{ width: 450 }} id="inputEmail"></textarea>
                          </div>
                          <div>
                            <button disabled style={{ marginTop: 5 }} className="btn btn-mini btn-primary" type="submit"> <i className="icon-reply"></i> Send</button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <h6>{t('private.futuremsgchannel')} <br /><br />-- Kris</h6>
                  </div>
                </div>

                <div className="tab-pane animated fadeIn" id="story">
                  <div style={{ padding: '0 0 10px 0' }}>
                    <h3>{t('story.story')}</h3>
                    <h6>
                      <div className="pull-right">
                        <img src="/artists/alex-keller-fonseca-700.jpg" className="img-rounded" style={{ margin: '0 0 0 20px', width: 350 }} />
                      </div>
                      {t('story.storyalex')}
                    </h6>
                    <br />
                    <h6>
                      <a href="#modalChapters" role="button" className="btn btn-large btn-warning" data-toggle="modal"><i className="icon-book"></i> {t('story.readchapters')} </a> {t('private.updatedwhen')}
                    </h6>
                  </div>
                  <div id="modalChapters" className="modal hide fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{ background: '#000' }}>
                    <div className="modal-header" style={{ border: 0, height: 0 }}>
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h3 id="myModalLabel" style={{ textAlign: 'center', color: '#000' }}>{t('story.story')}</h3>
                    </div>
                    <div className="modal-body animated fadeIn" style={{ maxHeight: 800 }}>
                      <div className="accordion" id="accordion2">
                        {[1,2,3,4,5,6,7].map((n) => (
                          <div className="accordion-group" key={n}>
                            <div className="accordion-heading">
                              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href={`#collapse${n}`}>
                                <i className="icon-bookmark"></i> {t(`story.chapter${n}title`)}
                              </a>
                            </div>
                            <div id={`collapse${n}`} className="accordion-body collapse">
                              <div className="accordion-inner" dangerouslySetInnerHTML={{ __html: t(`story.chapter${n}`) }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane animated fadeIn" id="payments">
                  <div>
                    <h3>
                      {t('private.payments')} <i className="icon-credit-card"></i>
                    </h3>
                    <div className="pull-right">
                      <img
                        src="/img/stripe-payments-example.jpg"
                        className="img-rounded"
                        style={{ width: 350, margin: '0 0 5px 15px' }}
                      />
                    </div>
                    <h6>
                      <span dangerouslySetInnerHTML={{ __html: t('private.paymentscontent') }} />
                    </h6>
                  </div>
                </div>
              </div>

            </div>
            <div className="span2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
