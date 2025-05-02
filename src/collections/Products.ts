import {
  FixedToolbarFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "product",
  admin: {
    useAsTitle: "title",
  },

  fields: [
    lexicalHTML("description_richtext", { name: "description" }),
    {
      type: "text",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "text",
      name: "desc",
      label: "Description",
      required: true,
    },
    {
      type: "richText",
      name: "about",
      label: "About",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures.filter(
            (feature) =>
              !["superscript", "subscript", "inlineCode"].includes(feature.key),
          ),
          FixedToolbarFeature(),
        ],
      }),
    },
    {
      type: "upload",
      name: "banner",
      relationTo: "media",
      required: true,
    },
  ],
};
