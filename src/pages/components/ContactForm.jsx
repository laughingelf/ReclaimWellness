import { useState } from "react";
import SuccessModal from "./SuccessModal";


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [file1, setFile1] = useState('');
  const [file2, setFile2] = useState('');
  const [file3, setFile3] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: encode({'form-name': 'contact', name, email, phone, comment, file1, file2, file3}),
    })
    .then(() => setShowModal(true) )
    .then(() => setName(''), setEmail(''), setPhone(''), setComment(''), setFile1(''), setFile2(''), setFile3('') )
    .catch((error) => alert(error))
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };



  return (
    <>

      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title='Reclaim Wellness'
        >
          <p>Thank you for contacting Reclaim Wellness. We have received your message, and our team will get back to 
            you as soon as possible. We look forward to working with you and supporting you on your wellness journey!</p>

        </SuccessModal>
    
      <form
        onSubmit={handleSubmit} id='contact-form' name="contact"
        className="max-w-2xl mx-4 sm:mx-auto p-8 sm:p-12 bg-white rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition space-y-6"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold mb-2 text-left">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-2 text-left">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 font-semibold mb-2 text-left">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Comment Text Box */}
        <div className="flex flex-col">
          <label htmlFor="comments" className="text-gray-700 font-semibold mb-2 text-left">
            Comments:
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            className="w-full px-4 py-2 border bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* File Uploads */}
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-inner">
          {/* File 1 */}
          <div className="w-full mb-4">
            <label htmlFor="file1" className="block text-gray-700 font-semibold mb-2 text-center">
              File Attachment 1
            </label>
            <input
              type="file"
              id="file1"
              name="file1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File 2 */}
          <div className="w-full mb-4">
            <label htmlFor="file2" className="block text-gray-700 font-semibold mb-2 text-center">
              File Attachment 2
            </label>
            <input
              type="file"
              id="file2"
              name="file2"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File 3 */}
          <div className="w-full mb-6">
            <label htmlFor="file3" className="block text-gray-700 font-semibold mb-2 text-center">
              File Attachment 3
            </label>
            <input
              type="file"
              id="file3"
              name="file3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            id="learn-btn"
            className="bg-blue-600 text-black px-8 py-3 rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
