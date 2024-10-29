import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  country: string;
  phone: string;
  occupation: string;
  education: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  country,
  phone,
  occupation,
  education,
  message,
}) => (
  <div>
    <h3 className="text-2xl font-bold">Contact Form Submission: Viso Way Consultancy Website</h3>
    <br />
    <table>
      <tr>
        <td>Name</td>
        <td>{name}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{email}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>{country}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{phone}</td>
      </tr>
      <tr>
        <td>Occupation</td>
        <td>{occupation}</td>
      </tr>
      <tr>
        <td>Education</td>
        <td>{education}</td>
      </tr>
      <tr>
        <td>Message</td>
        <td>{message}</td>
      </tr>
    </table>
  </div>
);
