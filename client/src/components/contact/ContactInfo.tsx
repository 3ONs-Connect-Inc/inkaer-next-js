import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div>  
      <h2 className="text-bold-3xl mb-8">Get in Touch</h2>
      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start">
          <Mail className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-4">
            <h3 className="text-sm sm:text-lg font-medium text-gray-900">
              Email
            </h3>
            <p className="text-small">contact@inkaer.com</p>
            <p className="text-sm text-gray-500 mt-1">
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start">
          <Phone className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-4">
            <h3 className="text-sm sm:text-lg font-medium text-gray-900">
              Phone
            </h3>
            <p className="text-small">+1 (647) 696-3447</p>
            <p className="text-sm text-gray-500 mt-1">
              Monday to Friday, 9am to 6pm EST
            </p>
          </div>
        </div>

        {/* Office */}
        <div className="flex items-start">
          <MapPin className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-4">
            <h3 className="text-sm sm:text-lg font-medium text-gray-900">
              Office
            </h3>
            <p className="text-small">
              2967 Dundas St W, 546D <br />
              Toronto, ON M6P 1Z2 <br />
              Canada
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start">
          <Clock className="w-4 h-4 xs:w-6 xs:h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="ml-4">
            <h3 className="text-sm sm:text-lg font-medium text-gray-900">
              Business Hours
            </h3>
            <p className="text-small">
              Monday - Friday: 9:00 AM - 6:00 PM EST <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
