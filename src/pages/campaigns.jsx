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
      setTotalPage(Math.ceil(newData.length / showEntrie));
    }
  }, [newData, showEntrie]);
  /// ACTUALISER SLICE SELON PAGE
  useEffect(() => {
    setNumbSlice({
      min: page * showEntrie - showEntrie,
      max: showEntrie * page,
    });
  }, [page]);
  //
  /// RECHERCHE ELEMENT
  const research = (e) => {
    research_default({
      data_default: Base,
      update_data: setNewData,
      search: e.target.value,
    });
  };
  //
  //
  // BUILDER
  //
  //
  ///
  const header = (
    <article className="header_campaigns">
      <div className="bloc_1">
        <h1>Campagnes</h1>

        <div className="bloc_user">
          <img src="cloche.svg" alt="cloche" />
          <span className="name_user">Jeremy</span>
          <div className="img_user">
            <img src="user_1.png" alt="cloche" />
            <img src="chevron.svg" alt="cloche" />
          </div>
        </div>
      </div>

      <div className="bloc_2">
        <div className="all_btn">
          <span className="option_campaigns">Campagnes</span>
          <span className="option_keywords">Mots-Clés</span>
          <button className="btn_new_campaigns">Nouvelle campagne</button>
        </div>

        <div className="bloc_search">
          <div className="dropdwon">
            <span>Date de création. desc.</span>
            <img src="chevron.svg" alt="cloche" />
          </div>
          <div className="input">
            <input
              className="search"
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
        newData.slice(numbSlice.min, numbSlice.max).map((item, index) => (
          <div key={index} className="table-row">
            {/* Colonne Nom */}
            <div className="name-column">
              <div className="name-content">
                <div className="campaign-name">{item.name}</div>
                <div className="tags-container">
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
            <div className="stats-column">
              <div className="stats-number">{item.sharing}</div>
              <div className="stats-subtitle">
                ({item.stay_sharing} en attente)
              </div>
            </div>

            {/* Colonne Clics */}
            <div className="stats-column">
              <div className="stats-number">{item.clics}</div>
            </div>

            {/* Colonne Contacts */}
            <div className="stats-column">
              <div className="stats-number">{item.contacts}</div>
            </div>

            {/* Colonne Actions */}
            <div className="actions-column">
              <button className="action-btn">
                <img src="share.svg" alt="cloche" />
              </button>
              <button className="action-btn">
                <img src="edit.svg" alt="cloche" />
              </button>
              <button className="action-btn">
                <img src="settings.svg" alt="cloche" />
              </button>
            </div>
          </div>
        ))
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

      <div className="option_paginate">
        <div className="dropdwon">
          <span>10 Résultats par page</span>
          <img src="chevron.svg" alt="cloche" />
        </div>

        <div className="page">
          <img
            src="chevron_right.svg"
            alt="cloche"
            className={`chevron_left ${page > 1 && "active"}`}
            onClick={() => setPage(page - 1)}
          />
          <span>
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
      <section className="campaigns">
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
