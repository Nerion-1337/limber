// COMPONENTS
import { research_default } from "#components/research";
// DATA
import Base from "#data/base.json";
// REACT
import { useState, useEffect } from "react";
//
//
//
//
//
export default function Campaigns() {
  //
  //
  // VARIABLE
  //
  //
  const [showEntrie, setShowEntrie] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [numbSlice, setNumbSlice] = useState({ min: 0, max: showEntrie });
  const [newData, setNewData] = useState(Base);
  const [animationKey, setAnimationKey] = useState(0);
  //
  //
  // FONCTION
  //
  //
  /// SI UPDATE BASE ACTUALISE NEWDATA
  useEffect(() => {
    if (Base.length > 0) {
      setNewData(Base);
    }
  }, [Base]);
  /// DEFINIR NOMBRE DE PAGE
  useEffect(() => {
    if (newData.length > 0) {
      const newTotalPage = Math.ceil(newData.length / showEntrie)
      setTotalPage(newTotalPage);
      if(newTotalPage < page){
        setPage(1)
      }
    }
  }, [newData, showEntrie]);
  /// ACTUALISER SLICE SELON PAGE
  useEffect(() => {
    setNumbSlice({
      min: page * showEntrie - showEntrie,
      max: showEntrie * page,
    });

    setAnimationKey((prev) => prev + 1);
  }, [page, showEntrie]);
  //
  /// RECHERCHE ELEMENT
  const research = (e) => {
    research_default({
      data_default: Base,
      update_data: setNewData,
      search: e.target.value,
    });

    setAnimationKey((prev) => prev + 1);
  };
  //
  //
  // BUILDER
  //
  //
  ///
  const header = (
    <article className="header_campaigns d-flex flex-column gap-4">
      <div className="bloc_1 w-100 d-flex justify-content-between">
        <h1>Campagnes</h1>
        <div className="bloc_user d-flex align-items-center gap-3">
          <img src="cloche.svg" alt="cloche" />
          <span className="name_user">Jeremy</span>
          <div className="img_user d-flex align-items-center">
            <img src="user_1.png" alt="cloche" />
            <img src="chevron.svg" alt="cloche" />
          </div>
        </div>
      </div>

      <div className="bloc_2 w-100 d-flex justify-content-between">
        <div className="all_btn d-flex align-items-center">
          <span className="option_campaigns">Campagnes</span>
          <span className="option_keywords">Mots-Clés</span>
          <button className="btn_new_campaigns">Nouvelle campagne</button>
        </div>

        <div className="bloc_search d-flex align-items-center gap-3">
          <div className="dropdwon d-flex align-items-center justify-content-between">
            <span>Date de création. desc.</span>
            <img src="chevron.svg" alt="cloche" />
          </div>
          <div className="input d-flex align-items-center justify-content-between">
            <input
              className="search d-flex align-items-center justify-content-between"
              placeholder="Recherche..."
              onChange={research}
            />
            <img src="search.svg" alt="loupe" />
          </div>
        </div>
      </div>
    </article>
  );
  ///
  const list = (
    <>
      {newData.length === 0 ? (
        <div className="empty-state">Aucune campagne trouvée</div>
      ) : (
        newData.slice(numbSlice.min, numbSlice.max).map((item, index) => {
          return (
            <div 
              key={`${animationKey}-${index}`} // Key dynamique pour forcer le re-rendu
              className="table-row"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                transform: `translateX(${index * -10}px)` // Décalage progressif
              }}
            >
              {/* Colonne Nom */}
              <div className="name-column d-flex align-items-center gap-3">
                <div className="name-content flex-fill">
                  <div className="campaign-name">{item.name}</div>
                  <div className="tags-container d-flex gap-2 flex-wrap">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag tag-digital">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {item.img && (
                  <img src={item.img} alt="Avatar" className="avatar" />
                )}
              </div>

              {/* Colonne Partages */}
              <div className="stats-column d-flex flex-column justify-content-center">
                <div className="stats-number">{item.sharing}</div>
                <div className="stats-subtitle">
                  ({item.stay_sharing} en attente)
                </div>
              </div>

              {/* Colonne Clics */}
              <div className="stats-column d-flex flex-column justify-content-center">
                <div className="stats-number">{item.clics}</div>
              </div>

              {/* Colonne Contacts */}
              <div className="stats-column d-flex flex-column justify-content-center">
                <div className="stats-number">{item.contacts}</div>
              </div>

              {/* Colonne Actions */}
              <div className="actions-column d-flex justify-content-end align-items-center" style={{gap: '5px'}}>
                <button className="action-btn d-flex align-items-center justify-content-center">
                  <img src="share.svg" alt="cloche" />
                </button>
                <button className="action-btn d-flex align-items-center justify-content-center">
                  <img src="edit.svg" alt="cloche" />
                </button>
                <button className="action-btn d-flex align-items-center justify-content-center">
                  <img src="settings.svg" alt="cloche" />
                </button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
  ///
  const body = (
    <article className="body_campaigns">
      <div className="table-header">
        <div>Nom</div>
        <div>Partages</div>
        <div>Clics</div>
        <div>Contacts</div>
        <div></div>
      </div>
      <div>{list}</div>

      <div className="option_paginate d-flex align-items-center justify-content-between">
        <div className="dropdwon d-flex align-items-center justify-content-between">
          <span>5 Résultats par page</span>
          <img src="chevron.svg" alt="cloche" />
        </div>

        <div className="page d-flex align-items-center justify-content-center gap-2">
          <img
            src="chevron_right.svg"
            alt="cloche"
            className={`chevron_left ${page > 1 && "active"}`}
            onClick={() => setPage(page - 1)}
          />
          <span className="d-flex align-items-center justify-content-center">
            {page}/{totalPage}
          </span>
          <img
            src="chevron_right.svg"
            alt="cloche"
            className={`chevron_right ${page < totalPage && "active"}`}
            onClick={() => setPage(page + 1)}
          />
        </div>
      </div>
    </article>
  );
  ///
  const content = (
    <>
      <section className="campaigns d-flex flex-column gap-4">
        {header}
        {body}
      </section>
    </>
  );
  //
  //
  // RETOUR
  //
  //
  return content;
}
