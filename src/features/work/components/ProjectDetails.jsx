"use client";

const ProjectDetails = ({ details }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-base font-bold uppercase tracking-tight">
        PROJECT DETAILS
      </h2>
      <div className="space-y-5">
        {details.map((detail, index) => (
          <div key={index} className="space-y-1">
            <h3 className="text-sm font-normal text-foreground">
              {detail.label}
            </h3>
            <p className="text-sm font-medium text-foreground">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;