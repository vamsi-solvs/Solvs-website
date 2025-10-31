"use client";

const ProjectDetails = ({ details }) => {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium uppercase tracking-tight text-black">
        PROJECT DETAILS
      </h2>

      {/* Detail Items */}
      <div className="space-y-6">
        {details.map((detail, index) => (
          <div key={index}>
            {/* Label */}
            <h3 className="text-[18px] md:text-[20px] font-medium text-[#484E55]">
              {detail.label}
            </h3>
            {/* Value */}
            <p className="text-[18px] md:text-[20px] font-medium text-black">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;