import {
  SidebarTradeIcon,
  SidebarPortFolioIcon,
  SidebarEarnIcon,
  SidebarGovernance,
  SidebarAnalytics,
  SidebarEducation,
  SidebarSupport,
} from "../../../assets/imgs/svgImgs/svgImgs";

export const sidebarLinks = [
  {
    id: 1,
    icon: <SidebarTradeIcon />,
    heading: "Trade",
    to: "/auth",
  },
  {
    id: 2,
    icon: <SidebarPortFolioIcon />,
    heading: "Portfolio",
    to: "/auth/portfolio",
    children: [
      {
        id: 8,
        icon: <SidebarEducation />,
        heading: "Subcategory 1",
        to: "/auth/portfolio/subcategory1",
      },
      {
        id: 9,
        icon: <SidebarEducation />,
        heading: "Subcategory 2",
        to: "/auth/portfolio/subcategory2",
      },
    ],
  },
  {
    id: 3,
    icon: <SidebarEarnIcon />,
    heading: "Earn",
    to: "/auth/earn",
  },
  {
    id: 4,
    icon: <SidebarGovernance />,
    heading: "Governance",
    to: "/auth/governance",
    children: [
      {
        id: 10,
        icon: <SidebarEducation />,
        heading: "Subcategory 3",
        to: "/auth/governance/subcategory3",
        children: [
          {
            id: 11,
            icon: <SidebarEducation />,
            heading: "Mobile",
            to: "/auth/governance/subcategory3/mobile",
            children: [
              {
                id: 111,
                icon: <SidebarEducation />,
                heading: "Apple",
                to: "/auth/governance/subcategory3/mobile/apple",
              },
              {
                id: 112,
                icon: <SidebarEducation />,
                heading: "Samsung",
                to: "/auth/governance/subcategory3/mobile/samsung",
              },
              {
                id: 113,
                icon: <SidebarEducation />,
                heading: "Nokia",
                to: "/auth/governance/subcategory3/mobile/nokia",
              },
            ],
          },
          {
            id: 12,
            icon: <SidebarEducation />,
            heading: "Laptop",
            to: "/auth/governance/subcategory3/laptop",
            children: [
              {
                id: 111,
                icon: <SidebarEducation />,
                heading: "Apple",
                to: "/auth/governance/subcategory3/mobile/apple",
              },
              {
                id: 112,
                icon: <SidebarEducation />,
                heading: "Samsung",
                to: "/auth/governance/subcategory3/mobile/samsung",
              },
              {
                id: 113,
                icon: <SidebarEducation />,
                heading: "Nokia",
                to: "/auth/governance/subcategory3/mobile/nokia",
              },
            ],
          },
          {
            id: 13,
            icon: <SidebarEducation />,
            heading: "TV",
            to: "/auth/governance/subcategory3/tv",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: <SidebarAnalytics />,
    heading: "Analytics",
    to: "/auth/analytics",
  },
  {
    id: 6,
    icon: <SidebarEducation />,
    heading: "Education",
    to: "/auth/education",
  },
  {
    id: 7,
    icon: <SidebarSupport />,
    heading: "Support",
    to: "/auth/support",
    children: [
      {
        id: 14,
        icon: <SidebarEducation />,
        heading: "Subcategory 4",
        to: "/auth/support/subcategory4",
      },
      {
        id: 15,
        icon: <SidebarEducation />,
        heading: "Subcategory 5",
        to: "/auth/support/subcategory5",
      },
    ],
  },
];
