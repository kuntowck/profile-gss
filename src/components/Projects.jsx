const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-slate-100 to-white"
    >
      <div className="layout">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
          <span className="bg-gradient-to-r from-violet-700 to-sky-500 text-transparent bg-clip-text">
            Our Projects
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Managed Service
              </h3>
              <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                <li>
                  <span className="font-semibold">PT Media Telekomunikasi Mandiri (2023-2024):</span>{" "}
                  Mengelola layanan Contact Center PT MTM berbasis managed
                  service/SLA, mulai dari penyediaan lokasi, system/aplikasi,
                  infrastruktur IT/Network, hingga man power.
                </li>
                <li>
                  <span className="font-semibold">PT Indosat Mega Media (2005-2022):</span>{" "}
                  Menyediakan teknisi IT Tier-1 & Tier-2 dalam bentuk
                  managed-service untuk membantu IT internal PT Indosat Mega
                  Media.
                </li>
                <li>
                  <span className="font-semibold">Gojek (2018-2019):</span> Sebagai partner
                  PT Indosat untuk menyediakan layanan on-site IT support di
                  seluruh kantor cabang Go-Jek di Indonesia.
                </li>
              </ul>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Sales and Rent
              </h3>
              <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                <li>
                  <span className="font-semibold">PT Adaro (2020-2022):</span>{" "}
                  Penyewaan ±200 unit laptop selama pandemi untuk mendukung
                  operasional karyawan selama WFH.
                </li>
                <li>
                  <span className="font-semibold">PT Indosat Mega Media (2015-2021):</span>{" "}
                  Penyewaan 150-200 unit laptop untuk operasional sehari-hari,
                  termasuk layanan tambahan managed-service.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
