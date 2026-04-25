import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for ecommerce</h4>
                <h5>ShopOS</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Shipped 10 agents running catalog, ads, creative, email, and storefront for Shopify brands doing ₹50L–₹10Cr a month.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for healthcare & finance</h4>
                <h5>Responsible AI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed Guardrail systems for agents in high-stakes domains.<br/>With research professors at Cambridge and Harvard.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for finance</h4>
                <h5>J.P. Morgan</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              AI Credit Risk systems at scale.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for sales</h4>
                <h5>SalesMonk</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led GTM. $500K revenue in 4 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
