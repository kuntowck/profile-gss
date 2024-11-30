const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Managed Service</h3>
            <p>Details about Managed Service projects.</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Sales and Rent</h3>
            <p>Details about Sales and Rent projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
