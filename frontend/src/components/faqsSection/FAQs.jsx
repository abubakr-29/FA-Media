import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What services does FA Media offer?",
    answer:
      "FA Media provides custom web development services including landing pages, portfolio websites, personal brand sites, hosting, and automation solutions. We also offer AI chatbot integrations and business automation tailored to your needs.",
  },
  {
    id: "item-2",
    question: "How long does it take to build a website?",
    answer:
      "Timelines vary based on the project scope. Simple landing pages are typically delivered within 3–5 days, while complete websites can take 1–2 weeks. We provide a detailed timeline after the initial consultation.",
  },
  {
    id: "item-3",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer optional maintenance plans that include updates, backups, performance monitoring, and security patches to ensure your website stays optimized and secure.",
  },
  {
    id: "item-4",
    question: "Can you help with design, branding, or content?",
    answer:
      "Yes! While development is our core focus, we help refine your layout, visuals, and basic content. For deep branding or copy, we can refer trusted creatives or collaborate with yours.",
  },
  {
    id: "item-5",
    question: "Why choose FA Media over other agencies?",
    answer:
      "We combine technical excellence with business-focused strategy. Our sites are fast, mobile-first, SEO-ready, and built to convert — all with personal attention from a passionate team that treats your project like their own.",
  },
];

export default function FAQs() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl text-stone-300">FAQs</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-0">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className={`border-0px ${
              index !== faqData.length
                ? "border-b border-dashed border-faq-border border-stone-400"
                : ""
            }`}
          >
            <AccordionTrigger className="text-left py-6 px-2 hover:bg-faq-hover hover:no-underline font-medium text-white text-lg leading-relaxed">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-0 px-2 text-muted-foreground text-white leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
