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
            "https://cdn.shopify.com/s/files/1/1674/0405/products/Godspeed75_white_infinikey-bow_angle_1480x.jpg?v=1581452820",
          linkUrl: "keyboards-page",
        },
        {
          id: 2,
          title: "artisans",
          imageUrl:
            "https://massdrop-s3.imgix.net/product-images/keycraft-galaxy-chimera-artisan-keycap/FP/gp7COISMQde80KU65Lfp_IMG_1625.JPG?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&q=70",
          linkUrl: "artisans-page",
        },
        {
          id: 3,
          title: "cables",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/2711/4238/products/coliledcabel-2_1024x1024.jpg?v=1523259749",
          linkUrl: "cables-page",
        },
        {
          id: 4,
          title: "keycaps",
          imageUrl:
            "https://massdrop-s3.imgix.net/product-images/drop-mito-gmk-laser-custom-keycap-set/FP/j4C6ntL4RgqWATDjqise_las2.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&q=70",
          size: "large",
          linkUrl: "keycaps-page",
        },
        {
          id: 5,
          title: "switches",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0114/9553/8754/products/4_1024x1024@2x.jpg?v=1571626542",
          size: "large",
          linkUrl: "switches-page",
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
