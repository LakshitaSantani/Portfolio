import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for ecommerce</h4>
                <h5><a href="https://shopos.ai/" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>ShopOS</a></h5>
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
                <h5><a href="https://www.responsible.ai/" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Responsible AI Labs</a></h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built the guardrail layer for agents in healthcare and finance. Co-developed with researchers at Cambridge and Harvard.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for finance</h4>
                                <h5><a href="https://www.jpmorgan.com/" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>J.P. Morgan</a></h5>

              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed a continuous monitoring system for credit risk.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for sales</h4>
                <h5><a href="https://salesmonk.ai/" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>SalesMonk</a></h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led GTM. Built the outbound engine end to end. $500K in 4 months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
