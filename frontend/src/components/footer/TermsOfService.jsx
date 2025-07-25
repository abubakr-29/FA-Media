import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const TermsOfService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.scrollTo(0, 0);
      isFirstRender.current = false;
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  const handleBackToHome = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <div className="text-white pt-34 pb-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-stone-400">Last updated: June 1, 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-stone-300 leading-relaxed">
            Welcome to FA Media! These Terms of Service govern your use of our
            website (fa-media.co.in) and the services we offer. By using our
            site or hiring us, you agree to these terms.
          </p>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <p className="text-stone-300 leading-relaxed">
            FA Media is a digital agency providing custom website development,
            branding, automation solutions, and deployment support. All services
            are tailored per client and scope agreed upon in writing.
          </p>
        </section>

        {/* Payments */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Payments</h2>
          <p className="text-stone-300 leading-relaxed">
            All project payments must be made upfront or as per a defined
            milestone agreement. We accept payments via Stripe, bank transfer,
            or UPI. Work begins only after payment is received.
          </p>
        </section>

        {/* Project Timelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Project Timelines</h2>
          <p className="text-stone-300 leading-relaxed">
            Timelines are discussed at the start of each project. Delays caused
            by lack of client input or feedback may extend delivery dates. We
            aim for timely delivery with quality.
          </p>
        </section>

        {/* Revisions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Revisions</h2>
          <p className="text-stone-300 leading-relaxed">
            We offer up to 1 round of revision per project. Additional changes
            may incur extra fees.
          </p>
        </section>

        {/* Refund Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <p className="text-stone-300 leading-relaxed">
            Due to the custom and digital nature of our work, we do not offer
            refunds once development has started. If you cancel before project
            kickoff, a partial refund may be issued (minus consultation and
            processing fees). Dissatisfaction will be handled professionally —
            we aim to resolve all issues promptly.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="text-stone-300 leading-relaxed">
            Clients receive full ownership of their final website assets and
            code after full payment. FA Media retains the right to showcase the
            work in its portfolio unless the client requests otherwise.
          </p>
        </section>

        {/* Client Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Client Responsibilities
          </h2>
          <p className="text-stone-300 leading-relaxed">
            Clients are responsible for providing required content (text,
            images, branding) in a timely manner. Delayed inputs may delay
            project delivery.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-stone-300 leading-relaxed">
            FA Media is not responsible for data loss, third-party plugin
            errors, hosting issues, or damages arising after project delivery.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-stone-300 leading-relaxed">
            We may update these Terms at any time. Any changes will be posted on
            this page.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-stone-300 leading-relaxed">
            For any questions, please contact:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@famedia.co.in&su=Inquiry%20from%20FA%20Media%20Website&body=Hi%20FA%20Media%20Team%2C%0D%0A%0D%0AI%20came%20across%20your%20website%20and%20I'm%20interested%20in%20working%20with%20you.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              support@famedia.co.in
            </a>
          </p>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button
            onClick={handleBackToHome}
            className="inline-block btn-glow px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition duration-500 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
