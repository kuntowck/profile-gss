const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen bg-slate-100 flex justify-center items-center"
    >
      <div className="max-w-screen-sm md:max-w-screen-xl mx-auto px-4 text-center">
        <h3 className="bg-gradient-to-r from-violet-700 to-sky-500 text-transparent bg-clip-text text-2xl md:text-4xl font-bold mb-8">Our Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Managed Service</h3>
            <p>
              PT Media Telekomunikasi Mandiri (2023-2024) – Mengelola layanan
              Contact Center PT MTM berbasis managed service /SLA, mulai dari
              penyediaan lokasi, system/aplikasi, infrastruktur IT/Network, man
              power.
            </p>
            <p>
              PT Indosat Mega Media (2005-2022) – Menyediakan teknisi IT Tier-1
              & Tier-2 dalam bentuk managed-service untuk membantu IT internal
              PT Indosat Mega Media dalam melayani kebutuhan operasional IT
              karyawan.
            </p>
            <p>
              Gojek (2018-2019) - Sebagai partner dari PT Indosat untuk
              menyediakan layanan on-site IT support pada salah satu client PT
              Indosat (Go-Jek) dengan cakupan layanan di seluruh kantor cabang
              Go-Jek seluruh Indonesia. Layanan berbasis kontrak payung
              (on-demand service)
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Sales and Rent</h3>
            <p>Details about Sales and Rent projects.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
