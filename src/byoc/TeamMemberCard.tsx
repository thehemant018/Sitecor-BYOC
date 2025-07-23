
import * as FEAAS from "@sitecore-feaas/clientside/react";

type MemberProps = {
  fullName: string;
  role: string;
  imageUrl: string;
};

const TeamMemberCard = ({ fullName, role, imageUrl }: MemberProps) => {
  return (
    <div className="p-4 rounded shadow border text-center max-w-sm bg-white">
      <img
        src={imageUrl}
        alt={fullName}
        className="w-24 h-24 mx-auto rounded-full mb-3"
      />
      <h3 className="text-lg font-semibold">{fullName}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

FEAAS.registerComponent(TeamMemberCard, {
  name: "TeamMemberCard",
  title: "Team Member Card",
  description: "Static team member profile card",
  thumbnail: "https://feaasstatic.blob.core.windows.net/assets/thumbnails/byoc.svg",
  group: "Team",
  required: ["fullName", "role", "imageUrl"],
  properties: {
    fullName: { type: "string", title: "Full Name" },
    role: { type: "string", title: "Role" },
    imageUrl: { type: "string", title: "Image URL" }
  },
  ui: {
    imageUrl: {
      "ui:placeholder": "https://example.com/profile.jpg"
    }
  }
});

export { TeamMemberCard };
