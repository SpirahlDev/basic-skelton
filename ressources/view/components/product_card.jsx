<>
  <div role="listitem" className="card w-dyn-item">
    <a
      href="/lalexandra/details/{sys_name}"
      className="home-product-image-wrapper w-inline-block"
    >
      <img
        src="/lalexandra/{image}"
        loading="lazy"
        alt=""
        className="home-product-image"
      />
    </a>
    {/* PARTIE INFO DE PRODUIT */}
    <div className="home-product-content-wrapper">
      <div className="home-product-content">
        <div className="home-product-row">
          <a href="#" className="heading-xsmall">
            {"{"}name{"}"}
          </a>
          <div className="home-product-price">
            <div className="text-weight-medium">
              {"{"}price_prod{"}"} FCFA
            </div>
          </div>
        </div>
        <div className="text-size-small">
          {"{"}description_prod{"}"}...
        </div>
      </div>
      <div className="margin-top margin-small">
        <a
          href="/lalexandra/details/{sys_name}"
          className="button-secondary max-width-full w-button"
        >
          Voir plus
        </a>
      </div>
    </div>
    {/* FIN */}
  </div>
  {/* FIN */}
</>
