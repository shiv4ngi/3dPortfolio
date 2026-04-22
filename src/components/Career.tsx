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
                <h4>Senior AI Engineer</h4>
                <h5>KoiReader Technologies</h5>
              </div>
              <h3>07/2023–Current</h3>
            </div>
            <p>
              Developed an end-to-end Agentic RAG pipeline using Vision LLMs and OCR. Engineered a multi-agent GPT system with Agno, LightRAG, and Qdrant. Designed and deployed a company-wide Coding Agent. Led AI-first automation initiatives for non-technical teams. Fine-tuned LLMs using QLoRA and optimized for edge deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>KoiReader Technologies</h5>
              </div>
              <h3>11/2020–06/2023</h3>
            </div>
            <p>
              Engineered CV pipelines for automated yard and warehouse operations. Boosted cross-camera tracking efficiency by 40% with SwinV2 classifier. Built SAM2-powered augmentation system using Generative AI. Optimized Brand Safety Multi-label Classification model. Built ML models for YouTube subscriber forecasting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Vidooly Media Tech.</h5>
              </div>
              <h3>09/2019–08/2020</h3>
            </div>
            <p>
              Enhanced the Oriented Object Detection tracking pipeline from 10 FPS to 30 FPS, enabling precise real-time vehicle tracking at production scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
