# Newsweek

> To recreate the homepage of popular news site, [Newsweek](https://www.newsweek.com/), using the Bootstrap framework.

![screenshot](assets/images/screenshot.png)

## Project Implementation

### Fixed Navbar

Bootstrap's `navbar` and `nav` components, and `flex` and `spacing` utilities are mainly used to build the Fixed Navbar, as well as the navbar within the Header.

This navbar is fixed to the top, and given a class of `container-fluid` so that it spans **100%** of the viewport width when visible. It is also set to a **top** of **-60px** to ensure it is initially out of view.

A JavaScript scroll function reveals the navbar when the user has scrolled more than **90px** of the page, and hides it when the scroll is less than 90px. A display function ensures the navbar is constantly on display at screen widths less than **992px**.

The navigation menu within the navbar is positioned **absolute**, and taken offscreen with a **left** of **100%**. Two icons wrapped within a **label** linked to a checkbox **input**, are used to toggle the menu. It is revealed and hidden as the icons are clicked between **checked** and **unchecked** states, respectively.

### Overall Page Wrapper

This is used to wrap the entire webpage, excluding the Fixed Navbar. It is also given a class of `container-fluid`, and assigned a **max-width** of **1310px** to prevent the page from growing beyond screen sizes larger than that width.

#### Header

The Header is divided into two sections: the Top Header Section and the Header Navbar. This whole section is only made visible from large screen sizes and upwards.

The navigation menu within the Header Navbar is built with **Flexbox**. Each menu list item is set to a `flex-basis` of **auto**, and a `flex` of **1**, allowing the menu to grow or shrink depending on the screen size.

The form within the Header Navbar is positioned **absolute**, with a **left** of **0** and a **right** of **6%**. The search **input** and **label** within it are placed at its extreme right. A **z-index**, lower than that of the navigation menu which it overlays, is initially applied. To ensure there is no overlap between the menu and the form's content, as the menu grows, the Header Navbar is given a `padding-right` of **160px**.

Finally, the search input is set to a `flex` of **1** and a **z-index** higher than the menu's to achieve the effect on **focus**.

#### Main Page Wrapper

The main wrapper is a fluid container used to wrap the rest of the page up to, but not including, the Footer. It contains five main sections: Highlights, In the Magazine, Editior's Picks, Featured Slideshows and News Focus.

Bootstrap's **grid** layout, `card` and `media` components, and `flex` and **spacing** utilities, are predominantly used to build all the sections within the main page wrapper.

All grid columns, within the five main sections, stack on extra-small and small screen sizes (up to **767px**).

##### Highlights

Three columns are created to position the three main sections within Highlights. On **XS** and **S** screens, the columns stack to create the following visual order of sub-sections - TOP STORY, MORE STORIES, CULTURE & TRAVEL, FEATURED STORIES, OPINION and LATEST NEWS - from top to bottom. At medium size, the section adopts a two-row layout. There are two columns on the top row. The first column houses the FEATURED STORIES section, while the second column displays sections in the order: TOP STORY, CULTURE & TRAVEL and MORE STORIES. The second row has one column, with sections in the order: OPINION and LATEST NEWS. The three columns are laid out parallel to each other, for large and extra-large screens: FEATURED STORIES section first, then MIDDLE (order: TOP STORY, CULTURE & TRAVEL and MORE STORIES), and RIGHT (order: OPINION and LATEST NEWS).

##### In The Magazine

This section is made up of six columns, to layout the articles it contains. From **768px** and upwards, the columns adopt a 4x2 grid.

##### Editor's Pick

There are eight columns in Editor's Pick. They form a 2x4 grid at medium screen size. However, they become a 4x2 grid for large and extra-large screens.

##### Featured Slideshows

This section consists of six columns. In medium, large and extra-large screen sizes, the columns are laid out as a 3x2 grid.

##### News Focus

Six sub-sections make up the News Focus section, namely: US, World, Business, Tech & Science, Culture and Sport.

Each sub-section has three columns, which are laid out parallel to each other from screen size **768px** upwards.

#### Footer

The Footer makes up the final part of the page, with a `container-fluid` class. It contains two main sections: Footer Links and Membership.

Bootstrap's **grid** layout, `nav` component, and `flex` and **spacing** have been mainly employed to create these sections.

All grid columns, within the Footer's main sections, stack on extra-small, small and medium screen sizes (up to **991px**).

##### Membership

Two columns make up this section, which are placed side by side on large and extra-large screens.

##### Footer Links

Footer Links is the final Footer section. It consists of three columns that are stacked across all screen sizes.

## Tools & Technologies Used

- HTML, CSS. JavaScript.
- Bootstrap.
- Github, Git, Visual Studio Code.
- Pesticide, Font Awesome.

## Live Demo

[Live Demo Link](https://cliftondavies.github.io/Newsweek/)

## Authors

👤 **Clifton Davies**

- Github: [@githubhandle](https://github.com/cliftondavies)
- Twitter: [@twitterhandle](https://twitter.com/cliftonaedavies)
- Linkedin: [linkedin](https://www.linkedin.com/in/clifton-davies-mbcs/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/cliftondavies/Newsweek/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- The Corgis!

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
