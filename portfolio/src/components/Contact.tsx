import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p>You can reach me via email at <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a>.</p>
      <p>You can also find me on:</p>
      <ul className="list-disc pl-5">
        <li><a href="#" className="text-blue-400 hover:underline">LinkedIn</a></li>
        <li><a href="#" className="text-blue-400 hover:underline">GitHub</a></li>
        <li><a href="#" className="text-blue-400 hover:underline">Twitter</a></li>
      </ul>
    </div>
  );
};

export default Contact;
