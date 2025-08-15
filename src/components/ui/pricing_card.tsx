import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cards">
        <div className="card red">
          <h3 className="title">Basic</h3>
          <p className="price">$600<span>/yr</span></p>
          <ul className="features">
            <li>1 project</li>
            <li>Basic support</li>
            <li>Community access</li>
          </ul>
          <button className="cta">Choose</button>
        </div>
        <div className="card blue">
          <h3 className="title">Premium</h3>
          <p className="price">$1000<span>/yr</span></p>
          <ul className="features">
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="cta">Choose</button>
        </div>
        <div className="card green">
          <h3 className="title">Enterprise</h3>
          <p className="price">$1800<span>/yr</span></p>
          <ul className="features">
            <li>Custom solutions</li>
            <li>Dedicated support</li>
            <li>Onboarding</li>
          </ul>
          <button className="cta">Choose</button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Landing palette: #424d70, #525d80, accent #fe661b -> #e55a18 */
  .cards {
    display: flex;
    flex-direction: column;
    gap: 32px; /* reduced gap */
    align-items: center;
    padding: 20px 10px;
  }

  @media (min-width: 768px) {
    .cards {
      flex-direction: row;
      justify-content: center;
      align-items: stretch;
      gap: 28px;
      padding: 28px 16px;
    }
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 640px;
    min-height: 460px; /* slightly shorter */
    border-radius: 18px;
    color: white;
    cursor: pointer;
    transition: transform 260ms ease, box-shadow 260ms ease;
    padding: 40px 34px; /* slightly reduced padding */
    box-shadow: 0 18px 48px rgba(15, 23, 42, 0.09);
    box-sizing: border-box;
  }

  /* Allow cards to grow evenly in a row layout */
  @media (min-width: 1100px) {
    .cards .card {
      flex: 1 1 0;
      max-width: none;
      min-width: 380px; /* slightly reduced min-width */
      padding: 48px 40px;
      min-height: 620px; /* slightly shorter on large screens */
    }
  }

  /* Variant: Basic (white card with landing dark text) */
  .cards .red {
    background: #ffffff;
    color: #424d70;
    border: 1px solid rgba(66,77,112,0.06);
  }

  /* Variant: Pro (accent orange gradient like landing) */
  .cards .blue {
    background: linear-gradient(90deg, #fe661b 0%, #e55a18 100%);
    color: #ffffff;
  }

  /* Variant: Enterprise (dark landing gradient) */
  .cards .green {
    background: linear-gradient(90deg, #424d70 0%, #525d80 100%);
    color: #ffffff;
  }

  .cards .card .title {
    font-size: 2.25rem;
    font-weight: 800;
    margin: 0 0 14px 0;
  }

  /* Make price color adapt depending on card background */
  .cards .red .price { color: #424d70; }
  .cards .blue .price,
  .cards .green .price { color: #ffffff; }

  .cards .card .price {
    font-size: 3.5rem; /* slightly reduced from 4rem */
    font-weight: 900;
    margin: 0 0 20px 0;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .cards .card .price span { font-size: 1.05rem; font-weight: 700; margin-left: 10px; opacity: 0.95; }

  .cards .card .features {
    list-style: none;
    padding: 0;
    margin: 0 0 32px 0;
    color: rgba(255,255,255,0.95);
    font-size: 1.125rem; /* slightly reduced feature text */
  }

  /* For white card use darker feature color */
  .cards .red .features { color: rgba(66,77,112,0.95); }

  .cards .card .features li { margin: 10px 0; }

  /* CTA styling: adapt per variant */
  .cards .card .cta {
    background: rgba(255,255,255,0.16);
    border: none;
    color: white;
    padding: 14px 28px; /* slightly reduced */
    border-radius: 14px;
    font-weight: 800;
    cursor: pointer;
    transition: background 180ms ease, transform 180ms ease, box-shadow 180ms ease;
  }

  /* White-card CTA: use dark background */
  .cards .red .cta {
    background: #424d70;
    color: #ffffff;
  }

  /* Accent-card CTA: white button with accent text */
  .cards .blue .cta {
    background: #ffffff;
    color: #fe661b;
  }

  /* Dark-card CTA: white button with dark text */
  .cards .green .cta {
    background: #ffffff;
    color: #424d70;
  }

  .cards .card .cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(2,6,23,0.09);
  }

  .cards .card:hover {
    transform: translateY(-16px) scale(1.03);
    box-shadow: 0 28px 66px rgba(2,6,23,0.20);
  }

  /* on wider screens, blur non-hovered cards slightly */
  @media (min-width: 1024px) {
    .cards:hover > .card:not(:hover) {
      filter: blur(2px) brightness(0.96);
      transform: scale(0.995);
      opacity: 0.97;
    }
  }
`;

export default Card;
