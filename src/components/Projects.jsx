const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Projects</h2>
        <p className="text-lg text-gray-700 mb-6">
          Here are some of the projects we've completed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contoh kartu proyek */}
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p>Amazing project for a valued client.</p>
          </div>
          <div className="p-6 border rounded shadow">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p>Innovative solution that changed the game.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
