import { useState } from "react";
import SuccessModal from "./SuccessModal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("comments", comment);
    if (file1) formData.append("file1", file1);
    if (file2) formData.append("file2", file2);
    if (file3) formData.append("file3", file3);

    fetch("/", { method: "POST", body: formData })
      .then(() => {
        setShowModal(true);
        setName("");
        setEmail("");
        setPhone("");
        setComment("");
        setFile1(null);
        setFile2(null);
        setFile3(null);
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      {/* Netlify detection form (hidden) */}
      <form name="contact" netlify hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <textarea name="comments" />
        <input type="file" name="file1" />
        <input type="file" name="file2" />
        <input type="file" name="file3" />
      </form>

      <SuccessModal show={showModal} onClose={() => setShowModal(false)} title="Reclaim Wellness">
        <p>
          Thank you for contacting Reclaim Wellness. We’ve received your message and will reply as soon as
          possible. We look forward to supporting your healing journey.
        </p>
      </SuccessModal>

      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
        className="max-w-3xl mx-4 sm:mx-auto relative rounded-2xl bg-[var(--surface)] ring-1 ring-[var(--line-200)] shadow-lg overflow-hidden"
      >
        {/* gentle brand wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal-50)] via-[var(--surface)] to-[var(--surface)]" />
        <div className="relative p-6 sm:p-10 space-y-8 text-[var(--ink-900)]">
          <input type="hidden" name="form-name" value="contact" />

          {/* Heading */}
          <header className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Send us a message</h2>
            <p className="text-[var(--ink-700)]">
              We typically respond within 1–2 business days. If you’re a veteran or low-income client,
              feel free to mention eligibility in your message.
            </p>
          </header>

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-[var(--ink-900)]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl bg-white px-4 py-3 ring-1 ring-[var(--line-200)]
                           placeholder:text-slate-400 focus:outline-none focus:ring-2
                           focus:ring-[var(--teal-600)]"
                placeholder="Jane Doe"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-[var(--ink-900)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-white px-4 py-3 ring-1 ring-[var(--line-200)]
                           placeholder:text-slate-400 focus:outline-none focus:ring-2
                           focus:ring-[var(--teal-600)]"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-2 font-semibold text-[var(--ink-900)]">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl bg-white px-4 py-3 ring-1 ring-[var(--line-200)]
                           placeholder:text-slate-400 focus:outline-none focus:ring-2
                           focus:ring-[var(--teal-600)]"
                placeholder="(555) 555-5555"
              />
            </div>

            {/* Spacer to balance grid */}
            <div className="hidden md:block" />

            {/* Comments (full width) */}
            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="comments" className="mb-2 font-semibold text-[var(--ink-900)]">
                How can we help?
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={5}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full rounded-xl bg-white px-4 py-3 ring-1 ring-[var(--line-200)]
                           placeholder:text-slate-400 focus:outline-none focus:ring-2
                           focus:ring-[var(--teal-600)]"
                placeholder="Share anything you’re comfortable with. If you’re asking about eligibility, add what you plan to submit."
              />
              <p className="mt-2 text-sm text-[var(--ink-700)]">
                Please do not include sensitive medical details.
              </p>
            </div>
          </div>

          {/* Files */}
          <fieldset className="space-y-4">
            <legend className="font-semibold text-[var(--ink-900)]">Attachments (optional)</legend>

            <div>
              <label htmlFor="file1" className="block text-sm mb-1 text-[var(--ink-700)]">
                File Attachment 1
              </label>
              <input
                id="file1"
                name="file1"
                type="file"
                onChange={(e) => setFile1(e.target.files?.[0] || null)}
                className="block w-full text-[var(--ink-700)] bg-white rounded-xl ring-1 ring-[var(--line-200)]
                           file:mr-4 file:rounded-md file:border-0 file:bg-[var(--teal-700)] file:text-white
                           file:px-4 file:py-2 hover:file:bg-[var(--teal-600)]
                           focus:outline-none focus:ring-2 focus:ring-[var(--teal-600)]"
              />
            </div>

            <div>
              <label htmlFor="file2" className="block text-sm mb-1 text-[var(--ink-700)]">
                File Attachment 2
              </label>
              <input
                id="file2"
                name="file2"
                type="file"
                onChange={(e) => setFile2(e.target.files?.[0] || null)}
                className="block w-full text-[var(--ink-700)] bg-white rounded-xl ring-1 ring-[var(--line-200)]
                           file:mr-4 file:rounded-md file:border-0 file:bg-[var(--teal-700)] file:text-white
                           file:px-4 file:py-2 hover:file:bg-[var(--teal-600)]
                           focus:outline-none focus:ring-2 focus:ring-[var(--teal-600)]"
              />
            </div>

            <div>
              <label htmlFor="file3" className="block text-sm mb-1 text-[var(--ink-700)]">
                File Attachment 3
              </label>
              <input
                id="file3"
                name="file3"
                type="file"
                onChange={(e) => setFile3(e.target.files?.[0] || null)}
                className="block w-full text-[var(--ink-700)] bg-white rounded-xl ring-1 ring-[var(--line-200)]
                           file:mr-4 file:rounded-md file:border-0 file:bg-[var(--teal-700)] file:text-white
                           file:px-4 file:py-2 hover:file:bg-[var(--teal-600)]
                           focus:outline-none focus:ring-2 focus:ring-[var(--teal-600)]"
              />
            </div>
          </fieldset>

          {/* Submit */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--teal-700)]
                         hover:bg-[var(--teal-600)] text-white font-semibold px-8 py-3 shadow-md transition"
            >
              Submit
            </button>
            <p className="mt-3 text-xs text-[var(--ink-700)]">
              By submitting, you agree to be contacted by Reclaim Wellness about your request.
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
