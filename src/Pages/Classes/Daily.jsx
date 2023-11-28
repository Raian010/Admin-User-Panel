
const Daily = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">
        Weekly <span className="text-blue-600">Schedule</span>
      </h2>

      <div className="mt-10 p-4 bg-gray-200">
        <table className="w-full border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500">Time</th>
              <th className="border border-gray-500">Saturday</th>
              <th className="border border-gray-500">Sunday</th>
              <th className="border border-gray-500">Monday</th>
              <th className="border border-gray-500">Tuesday</th>
              <th className="border border-gray-500">Wednesday</th>
              <th className="border border-gray-500">Thursday</th>
              <th className="border border-gray-500">Friday</th>
            </tr>
          </thead>
          <tbody>
            {/* 8:00 AM */}
            <tr>
              <td className="border text-center border-gray-500">8:00 AM</td>
              <td className="border text-center border-gray-500">Yoga</td>
              <td className="border text-center border-gray-500">Cardio</td>
              <td className="border text-center border-gray-500">Strength Training</td>
              <td className="border text-center border-gray-500">Rest</td>
              <td className="border text-center border-gray-500">HIIT</td>
              <td className="border text-center border-gray-500">Running</td>
              <td className="border text-center border-gray-500">Rest</td>
            </tr>

            {/* 4:00 PM */}
            <tr>
              <td className="border border-gray-500 text-center">4:00 PM</td>
              <td className="border border-gray-500 text-center">Pilates</td>
              <td className="border border-gray-500 text-center">Zumba</td>
              <td className="border border-gray-500 text-center">Rest</td>
              <td className="border border-gray-500 text-center">Boxing</td>
              <td className="border border-gray-500 text-center">Yoga</td>
              <td className="border border-gray-500 text-center">Rest</td>
              <td className="border border-gray-500 text-center">Cycling</td>
            </tr>

            {/* 9:00 PM */}
            <tr>
              <td className="border border-gray-500 text-center">9:00 PM</td>
              <td className="border border-gray-500 text-center">HIIT</td>
              <td className="border border-gray-500 text-center">Body Pump</td>
              <td className="border border-gray-500 text-center">Rest</td>
              <td className="border border-gray-500 text-center">Yoga</td>
              <td className="border border-gray-500 text-center">Cardio</td>
              <td className="border border-gray-500 text-center">Rest</td>
              <td className="border border-gray-500 text-center">Strength Training</td>
            </tr>

          </tbody>
        </table>
      </div> 
        </div>
    );
};

export default Daily;