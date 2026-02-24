import React from "react";
import { MdLocationOn, MdEmail, MdPhone, MdLanguage } from "react-icons/md";

const ContactSection = () => {
  const offices = [
    {
      country: "Singapore",
      address: "72 Sengkang Square, #02-50, LA Fiesta, Singapore 544706",
    },
    {
      country: "Bangladesh",
      address: "Level 2, House 1/A, Road 16/A, Gulshan 1, Dhaka 1212",
      dbid: "819582297",
      email: "info@tripnest.com",
      phone: "+88 09678 332211",
      website: "www.tripnest.com",
    },
    {
      country: "Pakistan",
      address:
        "Office 2, 73C, Jami Street 8, Jami Commercial Lane 11, Phase 7, DHA, Karachi",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Our Offices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{office.country}</h3>
            <p className="flex items-start gap-2 mb-2">
              <MdLocationOn className="text-xl text-orange-500" />
              {office.address}
            </p>
            {office.dbid && (
              <p className="mb-2">
                <span className="font-semibold">DBID:</span> {office.dbid}
              </p>
            )}
            {office.email && (
              <p className="flex items-center gap-2 mb-2">
                <MdEmail className="text-xl text-orange-500" />
                <a
                  href={`mailto:${office.email}`}
                  className="hover:underline text-blue-600"
                >
                  {office.email}
                </a>
              </p>
            )}
            {office.phone && (
              <p className="flex items-center gap-2 mb-2">
                <MdPhone className="text-xl text-orange-500" />
                {office.phone}
              </p>
            )}
            {office.website && (
              <p className="flex items-center gap-2">
                <MdLanguage className="text-xl text-orange-500" />
                <a
                  href={`https://${office.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  {office.website}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
