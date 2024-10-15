
const Footer = () => {
    return (
      <>
        <div className="py-5 border bg-gray-100 flex justify-between px-72">
          <div>
            <p>
              @2024 Ujjwal Mishra <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="space-x-5">
            
            <a  href="/privacy-policy.txt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline">
              Privacy Policy
            </a>
            <a href="/LICENSE" 
            target="_blank" 
            rel="noopener noreferrer"
            hover:underline>
              Licensing{" "}
            </a>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;