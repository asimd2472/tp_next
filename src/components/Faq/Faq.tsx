import { useState } from "react";

const faqItems = [
  {
    id: "delivery",
    icon: "clock",
    question: "What is the delivery time for my order?",
    answer:
      "We usually deliver orders within 5–7 business days, depending on your location. You will receive a tracking number once your order is shipped so you can easily monitor the status.",
  },
  {
    id: "returns",
    icon: "rotate",
    question: "What is your return policy?",
    answer:
      "We offer a straightforward return policy for damaged or incorrect items. Once approved, returns are processed within 7–10 business days and the refund is credited to your original payment method.",
  },
  {
    id: "payment",
    icon: "wallet",
    question: "Which payment methods do you accept?",
    answer:
      "We accept major credit cards, debit cards, UPI, net banking, and popular digital wallets for a secure and convenient checkout experience.",
  },
  {
    id: "security",
    icon: "shield",
    question: "Is my payment information secure?",
    answer:
      "Yes. All payments are processed through encrypted, secure gateways and we do not store sensitive card information on our site.",
  },
  {
    id: "support",
    icon: "support",
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team by email or phone during business hours. Our team is happy to help with product, shipping, and installation queries.",
  },
  {
    id: "shipping",
    icon: "globe",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to selected international destinations. Delivery timelines and shipping charges vary by country, and we will share the exact details at checkout.",
  },
  {
    id: "change-order",
    icon: "box",
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be updated or canceled before they are dispatched. Once shipped, changes may not be possible, but our support team can guide you on the next steps.",
  },
];

function Icon({ type }: { type: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (type) {
    case "clock":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7.2v5l3.2 2" />
        </svg>
      );
    case "rotate":
      return (
        <svg {...commonProps}>
          <path d="M3.8 9.2A8.2 8.2 0 0 1 18.8 7.5" />
          <path d="M20.2 14.8A8.2 8.2 0 0 1 5.2 16.5" />
          <path d="M3.8 9.2h5.1M20.2 14.8h-5.1" />
          <path d="m12 5.2 2.6 3.8-3.2.2" />
          <path d="m12 18.8-2.6-3.8 3.2-.2" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...commonProps}>
          <path d="M4.5 9.5V7.8A2.3 2.3 0 0 1 6.8 5.5h9.7a2.3 2.3 0 0 1 2.3 2.3v8.4A2.3 2.3 0 0 1 16.5 18.5H6.8A2.3 2.3 0 0 1 4.5 16.2v-1.7" />
          <path d="M4.5 10.2h12.5a2.3 2.3 0 0 1 2.3 2.3v.2" />
          <circle cx="15.5" cy="13.5" r="1.2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 18.5 6v5.6c0 4.1-2.8 7.9-6.5 9.9-3.7-2-6.5-5.8-6.5-9.9V6L12 3.5Z" />
          <path d="M9.2 12.2 11 14l3.8-4.1" />
        </svg>
      );
    case "support":
      return (
        <svg {...commonProps}>
          <path d="M7.2 11.5a4.8 4.8 0 0 1 9.6 0v2.7a2.8 2.8 0 0 1-2.8 2.8h-1.5v-4.1h4" />
          <path d="M7.2 11.5V9.4A4.8 4.8 0 0 1 12 4.6a4.8 4.8 0 0 1 4.8 4.8v2.1" />
          <path d="M6.5 16.8h4.1v2.7H7.5a2.8 2.8 0 0 1-2.8-2.8v-.9h1.8Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="M3.5 12h17" />
          <path d="M12 3.5a13 13 0 0 1 0 17" />
          <path d="M12 3.5a13 13 0 0 0 0 17" />
        </svg>
      );
    case "box":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 19 7v10l-7 3.5L5 17V7l7-3.5Z" />
          <path d="M12 3.5v17" />
          <path d="M5 7l7 3.5 7-3.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section" aria-label="Frequently asked questions section">
      <div className="faq-section__inner">
        <div className="faq-section__left">
          <p className="faq-section__eyebrow">Frequently asked</p>
          <h2>
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="faq-section__lead">
            Find quick answers to the most common questions about our products, services and support.
          </p>
          <a href="#contact" className="faq-section__cta">
            Contact Us <span aria-hidden="true">→</span>
          </a>

          <div className="faq-scene" aria-hidden="true">
            <div className="faq-scene__ring" />
            <div className="faq-chair">
              <div className="faq-chair__back" />
              <div className="faq-chair__seat" />
              <div className="faq-chair__arm faq-chair__arm--left" />
              <div className="faq-chair__arm faq-chair__arm--right" />
              <div className="faq-chair__leg faq-chair__leg--left" />
              <div className="faq-chair__leg faq-chair__leg--right" />
            </div>

            <div className="faq-table">
              <div className="faq-table__top" />
              <div className="faq-table__leg" />
            </div>

            <div className="faq-plant">
              <div className="faq-plant__pot" />
              <div className="faq-plant__stem" />
              <span className="faq-plant__leaf faq-plant__leaf--one" />
              <span className="faq-plant__leaf faq-plant__leaf--two" />
              <span className="faq-plant__leaf faq-plant__leaf--three" />
              <span className="faq-plant__leaf faq-plant__leaf--four" />
              <span className="faq-plant__leaf faq-plant__leaf--five" />
            </div>

            <div className="faq-note">We&apos;re here<br />to help!</div>
          </div>
        </div>

        <div className="faq-section__right">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.id} className={`faq-item ${isOpen ? "faq-item--active" : ""}`}>
                <button
                  type="button"
                  className="faq-item__trigger"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-item__icon" aria-hidden="true">
                    <Icon type={item.icon} />
                  </div>

                  <span className="faq-item__question">{item.question}</span>

                  <span className="faq-item__toggle" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && <p className="faq-item__answer">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
