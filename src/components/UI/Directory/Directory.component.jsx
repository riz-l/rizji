// Import: Dependencies
import React, { Component } from "react";

// Import: Styling
import "./Directory.styles.scss";

// Import: Components
import MenuItem from "../MenuItem/MenuItem.component";

// UI: Directory
class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "keyboards",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0046/9539/2305/products/Red_Alphas_Iron_165_2019-Nov-15_05-24-48AM-000_CustomizedView37336570777_800x.png?v=1574309042",
          linkUrl: "keyboardsPage",
        },
        {
          id: 2,
          title: "artisans",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0046/9539/2305/products/IMG_2619copy_1800x1800.jpg?v=1591986248",
          linkUrl: "",
        },
        {
          id: 3,
          title: "accessories",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/563c788ae4b099120ae219e2/1481090237484-X2XTQNKGHS3R3YVNHLS4/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/RAMA-M10-RENDER-57.jpg?format=1500w",
          linkUrl: "",
        },
        {
          id: 4,
          title: "keycaps",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1674/0405/products/Godspeed75_white_infinikey-bow_angle_1480x.jpg?v=1581452820",
          size: "large",
          linkUrl: "",
        },
        {
          id: 5,
          title: "switches",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0114/9553/8754/products/4_1024x1024@2x.jpg?v=1571626542",
          size: "large",
          linkUrl: "",
        },
      ],
    };
  }

  render() {
    return (
      <div className="Directory">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

// Export: Directory
export default Directory;
