import { Check } from "lucide-react";
import { Link } from "react-router-dom";

function SuccessRegister() {
  return (
    <>
      <div className="bg-[#12B279] w-24 h-24 flex items-center justify-center rounded-full m-auto">
        <Check color="#fff" size={48} />
      </div>

      <h1 className=" text-4xl font-semibold text-center">Registration success</h1>

      <Link to="/" className="black-btn w-[180px] m-auto">
        Continue
      </Link>
    </>
  );
}

export default SuccessRegister;
