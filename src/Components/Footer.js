const Footer = ({ color = "[#141414]" }) => {
  return (
    <div className={`bg-${color} text-gray-500 py-5 flex justify-center bg-gradient-to-top from-black`}>
      <div className="w-5/6">
        <div className="grid md:grid-cols-4 grid-cols-2  w-full gap-x-2  text-sm">
          <div className="bg-blue">
            <div className="py-2 hover:underline cursor-pointer">
              Audio Description
            </div>
            <div className="hover:underline cursor-pointer">
              Investor Relation
            </div>
            <div className="py-2 hover:underline cursor-pointer">
              Legal Notices
            </div>
          </div>
          <div className="bg-blue">
            <div className="py-2 hover:underline cursor-pointer">
              Help Center
            </div>
            <div className="hover:underline cursor-pointer">Jobs</div>
            <div className="py-2 hover:underline cursor-pointer">
              Cookies Preferences
            </div>
          </div>
          <div className="bg-blue">
            <div className="md:py-2 pb-2 hover:underline cursor-pointer">
              Gift Cards
            </div>
            <div className="hover:underline cursor-pointer">Terms of Use</div>
            <div className="py-2 hover:underline cursor-pointer">
              Corporate Information
            </div>
          </div>
          <div className="bg-blue">
            <div className="md:py-2 pb-2 hover:underline cursor-pointer">
              Media Center
            </div>
            <div className="hover:underline cursor-pointer">Privacy</div>
            <div className="py-2 hover:underline cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>

        <div>
          <span className="border border-gray-500 p-2 text-sm inline-block  w-auto ">
            Service Code
          </span>
          <span className="block text-sm py-2">© 1997-2024 Netflix, Inc.</span>
        </div>
      </div>
    </div>
  );
};



export default Footer;

Footer.defaultProps = {
  color: "[#141414]",
};
