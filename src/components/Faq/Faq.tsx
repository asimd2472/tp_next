import { useState } from "react";
import {
	FaArrowsRotate,
	FaBoxOpen,
	FaCreditCard,
	FaHeadset,
	FaRotateLeft,
	FaShieldHalved,
	FaTruckFast,
} from "react-icons/fa6";

const questions = [
	{
		question: "What is the delivery time for my order?",
		answer:
			"We usually deliver orders within 3–7 business days, depending on your location. You will receive a tracking number once your order is shipped, so you can easily monitor the status.",
		Icon: FaTruckFast,
		color: "blue",
	},
	{
		question: "What is your return policy?",
		answer:
			"If your order arrives damaged or isn’t right, contact our support team and we’ll help you with the next steps. Return eligibility depends on the product and its condition.",
		Icon: FaRotateLeft,
		color: "purple",
	},
	{
		question: "Which payment methods do you accept?",
		answer:
			"Our team can confirm the payment options available for your order when you make an enquiry or place your order.",
		Icon: FaCreditCard,
		color: "green",
	},
	{
		question: "Is my payment information secure?",
		answer:
			"For details about payment options and security for your order, please contact our team at enquiry@tatapravesh.com.",
		Icon: FaShieldHalved,
		color: "blue",
	},
	{
		question: "How can I contact customer support?",
		answer:
			"Call us toll free at 1800-209-1234 or email enquiry@tatapravesh.com. Our team will be happy to help.",
		Icon: FaHeadset,
		color: "pink",
	},
	{
		question: "Do you offer international shipping?",
		answer:
			"Tata Pravesh products and delivery options vary by location. Contact our team to check availability in your area.",
		Icon: FaBoxOpen,
		color: "orange",
	},
	{
		question: "Can I change or cancel my order?",
		answer:
			"Please contact our team as soon as possible with your order details. Changes or cancellations depend on the order’s current status.",
		Icon: FaArrowsRotate,
		color: "teal",
	},
];

export default function Faq() {
	const [openQuestion, setOpenQuestion] = useState(0);

	return (
		<section className="faq-section" aria-labelledby="faq-title">
			<div className="faq-section__inner">
				<div className="faq-section__intro">
					<p className="faq-section__eyebrow">Frequently Asked</p>
					<h2 id="faq-title">Frequently Asked Questions</h2>
					<p className="faq-section__description">
						Find quick answers to the most common questions about our products,
						services and support.
					</p>
					<a className="faq-section__contact" href="mailto:enquiry@tatapravesh.com">
						Contact Us <span aria-hidden="true">→</span>
					</a>
					<p className="faq-section__note" aria-hidden="true">
						We’re here
						<br />
						to help!
						<span />
					</p>
				</div>

				<div className="faq-section__list">
					{questions.map(({ question, answer, Icon, color }, index) => {
						const isOpen = openQuestion === index;
						const answerId = `faq-answer-${index}`;

						return (
							<article
								className={`faq-item${isOpen ? " faq-item--open" : ""}`}
								key={question}
							>
								<span className={`faq-item__icon faq-item__icon--${color}`} aria-hidden="true">
									<Icon />
								</span>
								<div className="faq-item__content">
									<h3 className="faq-item__heading">
										<button
											className="faq-item__trigger"
											type="button"
											aria-expanded={isOpen}
											aria-controls={answerId}
											onClick={() => setOpenQuestion(isOpen ? -1 : index)}
										>
											{question}
											<span className="faq-item__chevron" aria-hidden="true" />
										</button>
									</h3>
									<div className="faq-item__answer" id={answerId} hidden={!isOpen}>
										{answer}
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
