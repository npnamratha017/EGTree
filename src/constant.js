export const menus ={label:"Clinician Groups", children: [
    {
      label: "Hospital A",
      children: [
        {
            label: "Shoulder",
        },
        {
            label: "Knee",
        },
        {
          label: "Stomach",
          children: [
            {
                label: "Crohn's Disease",
            },
            {
                label: "Irritable Bowl Syndome",
            },
            {
                label: "Ulcerative Colitis",
            },
          ],
        },
      ],
    },
    {
      label: "Hospital B",
      children: [
        {
          label: "Gambling Addiction",
        },
        {
            label: "Anxiety",
        },
        {
            label: "Depression",
        },
      ],
    },
  ]
};
  
  export default menus;