import * as FEAAS from "@sitecore-feaas/clientside/react";

type Props = {
  firstName: string;
  lastName: string;
  email: string;
};

const UserCard = ({ firstName, lastName, email }: Props) => {
  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>User Info</h3>
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};


FEAAS.registerComponent(UserCard, {
  name: "UserCard",
  title: "Static User Card",
  description: "A simple user info display card.",
  thumbnail: "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "Examples",
  required: ["firstName"],
  properties: {
    firstName: { type: "string", title: "First Name" },
    lastName: { type: "string", title: "Last Name" },
    email: { type: "string", title: "Email" }
  },
  ui: {
    firstName: {
      "ui:placeholder": "Enter first name"
    },
    lastName: {
      "ui:placeholder": "Enter last name"
    },
    email: {
      "ui:placeholder": "Enter email"
    }
  }
});

console.log("Usercard Registered");

export { UserCard };
