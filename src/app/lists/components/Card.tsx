import { FunctionComponent } from "react";

const Card: FunctionComponent<TPerson> = ({
  name,
  contact_number,
  address,
  sex,
  age,
  position,
}) => {
  return (
    <div className=" border-1 p-4 rounded-md shadow-md">
      <p>
        <span className="font-bold">Name:</span> {name}
      </p>
      <p>
        <span className="font-bold">Contact Number:</span> {contact_number}
      </p>
      <p>
        <span className="font-bold">Address:</span> {address}
      </p>
      <p>
        <span className="font-bold">Sex:</span> {sex}
      </p>
      <p>
        <span className="font-bold">Age:</span> {age}
      </p>
      <p>
        <span className="font-bold">Position:</span> {position}
      </p>
    </div>
  );
};

export default Card;
