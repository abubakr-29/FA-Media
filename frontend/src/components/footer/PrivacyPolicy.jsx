import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-stone-400">Last updated: June 1, 2025</p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-stone-300 leading-relaxed">
            At FA Media, we respect your privacy and are committed to protecting
            your personal information.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <div className="space-y-4">
            <p className="text-stone-300 leading-relaxed">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-stone-300 space-y-2">
              <li>
                Contact details you provide via forms (name, email, phone)
              </li>
              <li>Project-related information you voluntarily share</li>
              <li>
                Analytics data like IP address, browser type (via Google
                Analytics or similar)
              </li>
            </ul>
          </div>
        </section>

        {/* How We Use Your Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
          <p className="text-stone-300 leading-relaxed mb-4">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-stone-300 space-y-2">
            <li>To respond to your inquiries</li>
            <li>To deliver services and manage projects</li>
            <li>To send you relevant updates (only if you opt-in)</li>
            <li>For legal and security reasons</li>
          </ul>
        </section>

        {/* Sharing of Data */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sharing of Data</h2>
          <p className="text-stone-300 leading-relaxed">
            We do not sell your data. We may share it with trusted service
            providers (like payment processors or email tools) solely to fulfill
            our services.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-stone-300 leading-relaxed">
            Our website may use cookies to enhance your browsing experience. You
            can disable cookies via your browser settings.
          </p>
        </section>

        {/* Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-stone-300 leading-relaxed">
            We use secure technologies and practices to safeguard your data.
            However, no online platform is 100% secure.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-stone-300 leading-relaxed">
            You may request access, updates, or deletion of your personal data
            by contacting us at{" "}
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

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-stone-300 leading-relaxed">
            We are not responsible for the privacy policies of external links or
            third-party tools used on this site.
          </p>
        </section>

        {/* Updates to Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Updates to Policy</h2>
          <p className="text-stone-300 leading-relaxed">
            We may modify this Privacy Policy from time to time. Updates will be
            posted here.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-stone-300 leading-relaxed">
            For any privacy-related concerns, email:{" "}
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

export default PrivacyPolicy;
