import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="mx-6 ">
      <h1 className="font-semibold text-center text-4xl mt-14 ">
        Do you need legal advice?{" "}
      </h1>
      <div class="flex justify-center">
        <hr className="w-24 h-0.5 mt-5 mb-8 bg-yellow-600 border-0 rounded" />
      </div>{" "}
      <p className="my-3 text-center">
        We understand that you may need help, but aren’t yet ready to enter into
        a retainer
      </p>
      <p className="my-3 text-center">
        If you need a confidential obligation-free consultation, contact us
        today.
      </p>
      <div className="md:w-[50%] mx-auto ">
        <div className="md:grid grid-cols-2 gap-6">
          <div className="my-3">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-white border border-gray-300
             text-gray-900 text-sm rounded-lg block  p-2.5 w-full "
              placeholder="Full Name"
              required
            />
            <p className="text-red-600"></p>
          </div>
          <div className="my-3">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-white border border-gray-300
             text-gray-900 text-sm rounded-lg block  p-2.5 w-full "
              placeholder="example@gmail.com"
              required
            />
            <p className="text-red-600"></p>
          </div>
          <div className="my-3">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="bg-white border border-gray-300
             text-gray-900 text-sm rounded-lg block  p-2.5 w-full "
              placeholder="phone Number"
              required
            />
            <p className="text-red-600"></p>
          </div>
          <div className="my-3">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-white border border-gray-300
             text-gray-900 text-sm rounded-lg block  p-2.5 w-full "
              placeholder="Mail Subject"
              required
            />
            <p className="text-red-600"></p>
          </div>

          <div className="my-3">
            <label
              for="typeofenquires"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Type of Enquires
            </label>
            <select
              id="typeofenquires"
              className="bg-white border border-gray-300
             text-gray-900 text-sm rounded-lg block  p-2.5 w-full "
            >
              <option selected>Select a type</option>
              <option value="Family law">Family law</option>
              <option value="Property law">Property law</option>
              <option value="Insurance law">Insurance law</option>
              <option value="Dispute resolution">Dispute resolution</option>
              <option value="Building and Construction">
                Building and Construction
              </option>
            </select>
          </div>
          <div className="my-3">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              className="bg-white border border-gray-300
             text-gray-900 text-sm rounded-lg block  p-2.5 w-full "
              placeholder="Address"
              required
            />
            <p className="text-red-600"></p>
          </div>
          <div className="my-3">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>
        <div className="md:flex justify-center">
          <button className="bg-cyan-600 hover:bg-cyan-900 py-2.5 w-full md:max-w-sm text-white font-bold rounded-lg mt-4">
            Submit
          </button>
        </div>
      </div>
      <h1 className="font-semibold text-center text-4xl mt-14 ">
        Contact Us Today
      </h1>
      <p className="text-center mt-2">
        Our team of compassionate lawyers and certified technicians provide
        unparalled expertise to assist you with whatever problem or concern you
        may have.{" "}
      </p>
      <div className="my-6">
        <div className="flex items-center gap-3 my-3">
          <GrLocation className="text-2xl text-cyan-600" />
          <div>
            <p className="text-xl font-semibold">Location</p>
            <p>Addis Ababa lideta infront of xxx</p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-3">
          <FiPhoneCall className="text-2xl text-cyan-600" />
          <div>
            <p className="text-xl font-semibold">Phone Number</p>
            <p>+251911111111</p>
            <p>+251911111111</p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-3">
          <MdOutlineEmail className="text-2xl text-cyan-600" />
          <div>
            <p className="text-xl font-semibold">Email</p>
            <p>support@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-3">
          <FaRegClock className="text-2xl text-cyan-600" />
          <div>
            <p className="text-xl font-semibold">Timing</p>
            <p>Mon - Fri 2:00- 11:00 LT</p>
            <p>Saturday 2:00- 11:00 LT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
