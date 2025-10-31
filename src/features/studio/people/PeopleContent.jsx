import Image from 'next/image';
import { peopleData } from '@/utils/people';

// Reusable card component for a single person
const PersonCard = ({ imageUrl, name, designation }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="w-full aspect-square relative mb-4 bg-gray-300 rounded-lg overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Photo of ${name}`}
            layout="fill"
            objectFit="cover"
          />
        ) : null}
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-md text-gray-600">{designation}</p>
    </div>
  );
};

// Main component to display a list of people
const PeopleContent = () => {

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {peopleData.map((person, index) => (
          <PersonCard
            key={index}
            name={person.name}
            designation={person.designation}
            imageUrl={person.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleContent;