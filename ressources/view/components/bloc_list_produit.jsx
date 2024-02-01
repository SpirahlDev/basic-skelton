<div className="product-category-list-wrapper w-dyn-list">
  <div role="list" className="product-category-list w-dyn-items">
    {/* CARTES PRODUIT ICI */}

    {/* Insérez ici votre logique de génération des cartes produit */}
    
    {/* FIN */}
  </div>
  {/* SI AUCUN PRODUIT TROUVE */}
  &lt;% if (productList == null || productList.isEmpty()) {"{"} %&gt;
  <div className="w-dyn-empty">
    <div>Pas de produit trouvé</div>
  </div>
  &lt;% {"}"} %&gt;
</div>
