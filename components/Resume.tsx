// app/components/Resume.tsx (Server Component)

import EducationToggle from '@/components/use_client/EducationToggle' 
 // Client component for state
import ExperienceToggle from '@/components/use_client/ExperienceToggle';  // Client component for state

const Resume = () => {
  return (
    <section className="lui-section lui-gradient-top" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> my <b>Story</b></span>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            {/* Education Section */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5 className="history-title scrolla-element-anim-1 scroll-animate" data-animate="active">
                <span> Education </span>
              </h5>
              <div className="history-items">
                <EducationToggle />
              </div>
            </div>

            {/* Experience Section */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5 className="history-title scrolla-element-anim-1 scroll-animate" data-animate="active">
                <span> Experience </span>
              </h5>
              <div className="history-items">
                <ExperienceToggle />
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
