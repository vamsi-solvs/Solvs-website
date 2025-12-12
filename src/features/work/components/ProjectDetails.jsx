"use client";

const ProjectDetails = ({ details }) => {
  return (
    <div className="space-y-8">
      {/* Section Title */}
      <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-medium uppercase tracking-tight text-gray-900">
        PROJECT DETAILS
      </h2>

      {/* Detail Items */}
      <div className="space-y-6">
        {details.map((detail, index) => (
          <div key={index}>
            {/* Label */}
            <h3 className="text-[12px] md:text-[14px] font-normal text-gray-900">
              {detail.label}
            </h3>
            {/* Value */}
            <p className="text-[12px] md:text-[14px] font-light text-[#484E55]">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;