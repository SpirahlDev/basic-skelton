function Como(){
    const [margin_left,setMargin_left]=React.useState(190);

    const Style={
        backgroundColor: 'rebeccapurple',
        color: 'white',
        padding: '3px',
        borderRadius: '5px',
        whiteSpace: 'nowrap',
        width: 'fit-content',
        transition:'0.3s ease-out',
    }

    React.useEffect(()=>{
        if(margin_left>=38){
            setTimeout(()=>{
                setMargin_left(margin_left-38);
            },100)
        }
    },[margin_left]);

    function resetMargin(){
        setMargin_left(margin_left+190);
    }

    return (
        <div style={Style}>
            Je teste oh
            <button style={{'margin-left': margin_left,'transition':'0.9s ease-out'}} onClick={resetMargin}>
                Incrémente
            </button>
        </div>
    )
}

function Footer(){
    return <div>Voici le footer</div>
}

 function Navbar(){
    return(
    <div
      data-w-id="52602f76-9c80-81bf-9e6e-e820b59bf198"
      data-animation="default"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar-component w-nav"
    >
      <div className="container-large">
        <div className="navbar-container">
          <div className="navbar-logo-link-wrapper">
            <a
              href="/lalexandra/home"
              aria-current="page"
              className="navbar-logo-link w-nav-brand w--current"
            >
              <img
                src="/lalexandra/statics/icon/lalexandra.svg"
                id="our_brand"
                loading="lazy"
                alt=""
                className="navbar-logo"
              />
            </a>
          </div>
          <nav role="navigation" className="navbar-menu w-nav-menu">
            <div className="navbar-menu-left">
              <a
                href="/lalexandra/collection/all-products"
                className="navbar-link w-nav-link"
              >
                Produits
              </a>
              <div
                data-hover="false"
                data-delay={300}
                data-w-id="52602f76-9c80-81bf-9e6e-e820b59bf1a3"
                className="navbar-menu-dropdown w-dropdown"
              >
                <div className="navbar-dropdown-toggle w-dropdown-toggle">
                  <div>Collections</div>
                  <div className="icon-xsmall">expand_more</div>
                </div>
                <nav className="navbar-dropdown-list w-dropdown-list">
                  <div className="navbar-container">
                    <div className="container-large">
                      <div className="navbar-dropdown-content w-dyn-list">
                        {/* AFFICHER LES CATEGORIES ICI */}
                        <div
                          role="list"
                          className="navbar-dropdown-content-left w-dyn-items"
                        >
                          {/* Element de liste */}
                          {/* FIN d'element */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-bottom-bar">
                    <div className="navbar-bottom-bar-background" />
                    <div className="navbar-bottom-bar-content">
                      <div className="text-size-small text-weight-medium">
                        Explorez tous nos produits{" "}
                        <a
                          href="collection/all-products"
                          className="text-style-link banner"
                        >
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <a href="/lalexandra/authenticate" className="navbar-link w-nav-link">
                S'inscrire/Se connecter
              </a>
            </div>
          </nav>
          <div className="navbar-menu-right">
            <form action="/lalexandra/collection/research" method="get">
              <input
                type="text"
                className="search-click"
                name="searchPattern"
                style={{
                  backgroundRepeat: "no-repeat",
                  paddingLeft: 30,
                  borderRadius: 5,
                  border: "1px solid"
                }}
                placeholder="Recherchez ici..."
              />
            </form>
            <div
              data-node-type="commerce-cart-wrapper"
              data-open-product=""
              data-wf-cart-type="rightSidebar"
              data-wf-cart-query=""
              data-wf-page-link-href-prefix=""
              className="w-commerce-commercecartwrapper cart"
            >
              <a
                href="#"
                id="cart_btn"
                data-node-type="commerce-cart-open-link"
                className="w-commerce-commercecartopenlink button-secondary is-button-small w-inline-block"
              >
                <div className="icon-tiny">shopping_bag</div>
                <div className="margin-left margin-tiny">
                  <div className="w-inline-block">Panier</div>
                </div>
                <div
                  style={{ display: "none" }}
                  data-count-hide-rule="always"
                  className="w-commerce-commercecartopenlinkcount"
                >
                  0
                </div>
              </a>
              <div
                data-node-type="commerce-cart-container-wrapper"
                style={{ display: "none" }}
                className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar"
                id="cart"
              >
                <div
                  data-node-type="commerce-cart-container"
                  className="w-commerce-commercecartcontainer cart-container"
                >
                  <div className="w-commerce-commercecartheader cart-header">
                    <h4 className="w-commerce-commercecartheading">Votre panier</h4>
                    <a
                      href="#"
                      data-node-type="commerce-cart-close-link"
                      className="w-commerce-commercecartcloselink w-inline-block"
                    >
                      <svg
                        id="close_cart"
                        width="16px"
                        height="16px"
                        viewBox="0 0 16 16"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g fillRule="nonzero" fill="#333333">
                            <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="w-commerce-commercecartformwrapper">
                    <form
                      data-node-type="commerce-cart-form"
                      className="w-commerce-commercecartform"
                    >
                      <div
                        className="w-commerce-commercecartlist cart-list"
                        id="cart-list-screen"
                        data-wf-collection="database.commerceOrder.userItems"
                        data-wf-template-id="wf-template-52602f76-9c80-81bf-9e6e-e820b59bf1d2"
                      />
                      <div className="w-commerce-commercecartfooter cart-footer">
                        <div className="w-commerce-commercecartlineitem cart-line-item">
                          <div className="text-size-medium">Total</div>
                          <div className="w-commerce-commercecartordervalue text-size-medium text-weight-semibold" />
                        </div>
                        <div>
                          <div data-node-type="commerce-cart-quick-checkout-actions">
                            <a
                              role="button"
                              tabIndex={0}
                              aria-haspopup="dialog"
                              data-node-type="commerce-cart-quick-checkout-button"
                              style={{ display: "none" }}
                              className="w-commerce-commercecartquickcheckoutbutton"
                            >
                              <svg
                                className="w-commerce-commercequickcheckoutgoogleicon"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <defs>
                                  <polygon
                                    id="google-mark-a"
                                    points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                                  />
                                  <polygon
                                    id="google-mark-c"
                                    points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                                  />
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                  <path
                                    fill="#4285F4"
                                    d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                                  />
                                  <path
                                    fill="#34A853"
                                    d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                                  />
                                  <g transform="translate(0 4)">
                                    <mask id="google-mark-b" fill="#fff">
                                      <use xlinkHref="#google-mark-a" />
                                    </mask>
                                    <path
                                      fill="#FBBC04"
                                      d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,3.54 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                      mask="url(#google-mark-b)"
                                    />
                                  </g>
                                  <mask id="google-mark-d" fill="#fff">
                                    <use xlinkHref="#google-mark-c" />
                                  </mask>
                                  <path
                                    fill="#EA4335"
                                    d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                                    mask="url(#google-mark-d)"
                                  />
                                </g>
                              </svg>
                              <svg
                                className="w-commerce-commercequickcheckoutmicrosofticon"
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <polygon
                                    fill="#F05022"
                                    points="7 7 1 7 1 1 7 1"
                                  />
                                  <polygon
                                    fill="#7DB902"
                                    points="15 7 9 7 9 1 15 1"
                                  />
                                  <polygon
                                    fill="#00A4EE"
                                    points="7 15 1 15 1 9 7 9"
                                  />
                                  <polygon
                                    fill="#FFB700"
                                    points="15 15 9 15 9 9 15 9"
                                  />
                                </g>
                              </svg>
                            </a>
                          </div>
                          <a
                            href="/lalexandra/checkout"
                            value="Continue to Checkout"
                            data-node-type="cart-checkout-button"
                            className="w-commerce-commercecartcheckoutbutton button"
                            data-loading-text="Hang Tight..."
                          >
                            Procéder à une commande
                          </a>
                        </div>
                      </div>
                    </form>
                    <div
                      style={{ display: "none" }}
                      data-node-type="commerce-cart-error"
                      className="w-commerce-commercecarterrorstate"
                    >
                      <div
                        className="w-cart-error-msg"
                        data-w-cart-quantity-error="Product is not available in this quantity."
                        data-w-cart-general-error="Something went wrong when adding this item to the cart."
                        data-w-cart-checkout-error="Checkout is disabled on this site."
                        data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                        data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                      >
                        Product is not available in this quantity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-menu-button w-nav-button">
              <div className="menu-icon">
                <div className="menu-icon-line-top" />
                <div className="menu-icon-line-middle">
                  <div className="menu-icon-line-middle-inner" />
                </div>
                <div className="menu-icon-line-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
    }
    
    class Square extends React.Component {
      render() {
        return (
          <button className="square">
            {/* TODO */}
          </button>
        );
      }
    }
    
    class Board extends React.Component {
      renderSquare(i) {
        return <Square />;
      }
    
      render() {
        const status = 'Next player: X';
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
      }
    }
    
    class Game extends React.Component {
      render() {
        return (
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        );
      }
    }
    
    // ========================================
  
    