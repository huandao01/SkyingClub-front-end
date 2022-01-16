export const routes = [
  // {
  //   title: "Bộ môn",
  //   children: [
  //     {
  //       title: "Nhảy dù",
  //     },
  //     {
  //       title: "Đua xe",
  //     },
  //     {
  //       title: "Bắn súng",
  //     },
  //   ],
  // },
  {
    title: "Giải thể thao",
    path: "/skyingclub/sport",
  },
  {
    title: "Bảng xếp hạng",
    path: "/skyingclub/rank",
  },
  {
    role: "ROLE_1",
    title: "Cửa hàng",
    path: "/admin/bill",
  },
  {
    ignore: "ROLE_1",
    title: "Cửa hàng",
    path: "/skyingclub/shop",
  },
];
