<div className="page-wrapper">
  <main className="main-wrapper">
    <section className="section-product-category">
      <div className="page-padding">
        <div className="container-large z-index-1">
          <div className="padding-vertical padding-xhuge">
            <div className="margin-bottom margin-xxlarge">
              <div className="margin-bottom margin-xsmall">
                <h1>{/* Insérer la valeur de category_name ici */}</h1>
              </div>
              <div>{/* Insérer la valeur de description_category ici */}</div>
            </div>
            <div className="product-category-component">
              <div className="product-categories-wrapper">
                <div className="margin-bottom margin-small">
                  <div className="heading-small">Catégories</div>
                </div>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    {/* Boucle à travers les catégories (à insérer manuellement) */}
                    {/* Remplacez la boucle JSP par votre propre HTML */}
                    <div
                      role="listitem"
                      className="product-category-item w-dyn-item"
                    >
                      <a
                        href="/lalexandra/collection/{system_name}"
                        className="product-category-item-link w-inline-block custom-a"
                      >
                        <div>
                          {"{"}category_name{"}"}
                        </div>
                      </a>
                    </div>
                    {/* Fin de la boucle */}
                  </div>
                </div>
              </div>
              {/* BLOC LISTE PRODUIT ICI */}
              {/* Inclure le fichier block_list_produit.jsp ici, ou ajouter le HTML directement */}
              {/* FIN */}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/lalexandra/statics/images/Pink-Graphic.svg"
        loading="lazy"
        alt=""
        className="product-category-graphic"
      />
    </section>
  </main>
</div>
