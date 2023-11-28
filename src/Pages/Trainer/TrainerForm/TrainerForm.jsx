import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import UsePublic from "../../../Hooks/Public/UsePublic";

const TrainerForm = () => {
  const [selected, setSelected] = useState([]);

  const { user } = useContext(AuthContext);

  const axiosPublic = UsePublic();

  const handleSkill = skill => {
    setSelected(previous => 
      previous.includes(skill) ? previous.filter(item => item !== skill) : [...previous,skill]
      );
  };

  

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = form.name.value;
    const age = form.age.value;
    const image = form.image.value;
    const week = form.week.value;
    const day = form.day.value;
    const category = selected;

    form.reset();

    const newTrainer = {
      email,
      name,
      age,
      image,
      week,
      day,
      category,
    };
    console.log(newTrainer);
    axiosPublic.post("/trainer", newTrainer)
    .then((res) => {
      const result = res.data;
      console.log(result);
      if (result.insertedId) {
        Swal.fire("Success!", "You successfully applied for the trainer", "success");
      }
    });
  };
  return (
    <div className="my-10">
      <Helmet>
        <title>Fitness Freak || Trainer Form</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center">
        Trainer <span className="text-blue-600">Form</span>
      </h2>
      <form onSubmit={handleForm} className="mt-10 space-y-8 bg-gray-200 p-10">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-1/2"
        />
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          disabled
          placeholder="Email"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Age"
          className="input input-bordered w-1/2"
        />
        <input
          type="text"
          name="image"
          placeholder="Profile Image"
          className="input input-bordered w-1/2"
        />
        <br />
        <input
          type="text"
          name="week"
          placeholder="Available time in a week (in hour)"
          className="input input-bordered w-1/2"
        />

        <input
          type="text"
          name="day"
          placeholder="Available time in a day (in hour)"
          className="input input-bordered w-1/2"
        />

        <br />

        <div className="space-y-4">
        <label className="text-lg">Skills:</label>
        {["Strength Training", "Flexibility", "Functional Training", "Sport-specific Training", "Nutrition and Diet"].map((skill) => (
          <div key={skill} className="flex items-center">
            <input
              type="checkbox"
              checked={selected.includes(skill)}
              onChange={() => handleSkill(skill)}
              className="mr-2"
            />
            {skill}
          </div>
        ))}
      </div>          
      
        <div className="flex justify-center">
          <input
            className="btn btn-neutral w-2/3"
            type="submit"
            value="Applied"
          />
        </div>
      </form>
    </div>
  );
};

export default TrainerForm;
