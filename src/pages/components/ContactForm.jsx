import { useState } from "react";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('comments', comment);
    if (file1) formData.append('file1', file1);
    if (file2) formData.append('file2', file2);
    if (file3) formData.append('file3', file3);

    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setShowModal(true);
        setName('');
        setEmail('');
        setPhone('');
        setComment('');
        setFile1(null);
        setFile2(null);
        setFile3(null);
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      {/* Hidden form for Netlify to detect */}
      <form name="contact" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="comments"></textarea>
        <input type="file" name="file1" />
        <input type="file" name="file2" />
        <input type="file" name="file3" />
      </form>

      <SuccessModal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Reclaim Wellness"
      >
        <p>
          Thank you for contacting Reclaim Wellness. We have received your message, and our team will get back to 
          you as soon as possible. We look forward to working with you and supporting you on your wellness journey!
        </p>
      </SuccessModal>

      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
        className="max-w-2xl mx-4 sm:mx-auto p-8 sm:p-12 bg-white rounded-lg shadow-md shadow-gray-500 hover:shadow-lg transition space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Comment */}
        <div className="flex flex-col">
          <label htmlFor="comments" className="text-gray-700 font-semibold mb-2 text-left">
            Comments:
          </label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            className="w-full px-4 py-2 border bg-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        {/* File Uploads */}
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-inner">
          <div className="w-full mb-4">
            <label htmlFor="file1" className="block text-gray-700 font-semibold mb-2 text-center">
              File Attachment 1
            </label>
            <input
              type="file"
              id="file1"
              name="file1"
              onChange={(e) => setFile1(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="file2" className="block text-gray-700 font-semibold mb-2 text-center">
              File Attachment 2
            </label>
            <input
              type="file"
              id="file2"
              name="file2"
              onChange={(e) => setFile2(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full mb-6">
            <label htmlFor="file3" className="block text-gray-700 font-semibold mb-2 text-center">
              File Attachment 3
            </label>
            <input
              type="file"
              id="file3"
              name="file3"
              onChange={(e) => setFile3(e.target.files[0])}
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
