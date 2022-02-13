export default function Projects() {
  return (
    <div className="contaner my-5 px-5">
      <div className="row">
        <div className="col-12">
          <h1>Projects I've Worked On</h1>
          <h3>Side Projects</h3>
        </div>
        <div className="col-6">
          {/* My Website */}
          <div className="rounded shadow-gray-400 shadow-lg p-3 border border-gray-100 my-2">
            <h3>My Website</h3>
            <p className="text-sm">React </p>
            <div class="flex justify-content-end  gap-4 mt-4">
              <a
                href="https://github.com/gokulmathew/gokulportfolio"
                target="_blank"
                className="text-indigo-700 hover:text-violet-500"
              >
                View Code
              </a>
            </div>
          </div>

          {/*  Music App */}
          <div className="rounded shadow-gray-400 shadow-lg p-3 border border-gray-100  my-2">
            <h3>Music App</h3>
            <p className="text-sm">React - TypeScript</p>
            <div class="flex justify-content-end  gap-4 mt-4">
              <a
                href="https://github.com/gokulmathew/MusicApp"
                target="_blank"
                className="text-indigo-700 hover:text-violet-500"
              >
                View Code
              </a>
            </div>
          </div>

          {/*Water Simulator */}
          <div className="rounded shadow-gray-400 shadow-lg p-3 border border-gray-100  my-2">
            <h3>Water Simulator</h3>
            <p className="text-sm">React - TypeScript</p>
            <div class="flex justify-content-end  gap-4 mt-4">
              <a
                href="https://github.com/gokulmathew/WaterFlowSimulator/tree/master/simulator"
                target="_blank"
                className="text-indigo-700 hover:text-violet-500"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* Covid Vaccination Status */}
          <div className="rounded shadow-gray-400 shadow-lg p-3 border border-gray-100  my-2">
            <h3>Covid Vaccination Status</h3>
            <p className="text-sm">React - TypeScript - Mirage</p>
            <div class="flex justify-content-end  gap-4 mt-4">
              <a
                href="https://github.com/gokulmathew/covid-vaccination-status"
                target="_blank"
                className="text-indigo-700 hover:text-violet-500"
              >
                View Code
              </a>
            </div>
          </div>

          {/* Cypress  */}
          <div className="rounded shadow-gray-400 shadow-lg p-3 border border-gray-100  my-2">
            <h3>End to End Testing</h3>
            <p className="text-sm">React - Cypress</p>
            <div class="flex justify-content-end  gap-4 mt-4">
              <a
                href="https://github.com/gokulmathew/End_to_end_testing_Cypress"
                target="_blank"
                className="text-indigo-700 hover:text-violet-500"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
