# Newsweek

> To recreate the homepage of popular news site, [Newsweek](https://www.newsweek.com/), using the Bootstrap framework.

![screenshot](assets/images/screenshot.png)

## Project Implementation

The webpage is divided into five main sections as follows: **Top**, **Navigation**, **Featured**, **Main** and **Footer**.

### Fixed Navbar

This navbar is fixed to the top, and given a class of `container-fluid` so that it spans **100%** of the viewport width when visible. It is set to a **top** of **-60px** to ensure it initially out of view.

A JavaScript scroll function reveals the navbar when the user has scrolled more than **90px** of the page, and hides it when the scroll is less than 90px. A display function ensures the navbar is constantly on display at screen widths less than **992px**.

The navigation menu within the navbar is positioned absolute, and taken offscreen with a **left** of **100%**. Two icons wrapped within a **label** linked to a checkbox input, are used to toggle the menu. It is revealed and hidden as the icons are clicked between **checked** and **unchecked** states, respectively.

### Overall Page Wrapper

This is used to wrap the entire webpage, excluding only the Fixed Navbar. It is also given a class of `container-fluid`, and assigned a **max-width** of **1310px** to restrict the page from growing beyond screen sizes larger than that width.

### Header

The page header is divided into two sections: the Top Header Section and the Header Navbar. This whole section is only made visible from large screen sizes and up.

The navigation menu within the Header Navbar is built with **Flexbox**. Each menu list item is set to a `flex-basis` of **auto**, and a `flex` of **1**, allowing the menu to grow or shrink depending on the screen size.

The form within the Header Navbar is positioned absolute, with a **left** of **0** and a **right** of **6%**. The search **input** and **label** within it are placed at its extreme right. A **z-index**, lower than that of the navigation menu which it overlays, is initially applied. To ensure there is no overlap between the menu and the form's content, as the menu grows, the Header Navbar is given a `padding-right` of **160px**.

Finally, the search input is set to a `flex` of **1** and a **z-index** higher than the menu's to achieve the focus effect.

### Main Page Wrapper

The main wrapper is a fluid container used to wrap the rest of the page up to, but not including, the Footer. It contains five main sections: Highlights, In the Magazine, Editior's Picks, Featured Slideshows and News Focus.

Bootstrap **grid**, `card` and `media` components, and `flex` and **spacing** utilities, are predominantly used to layout build the following sections and their sub-sections within the main page wrapper.

All grid columns, within the main sections, stack on extra-small and small screen sizes (up to **767px**).

#### Highlights

This section is made up of three columns to position the three sub-sections within it. At medium size, the section adopts a two-column layout with the third column at width 100% beneath the other two. From large screens upward, the columns become parallel to each other.

#### In The Magazine

This section is made up of six columns to layout the articles it contains. From **768px** and upwards, the columns adopt a 4x2 grid.

#### Editor's Pick

The Editor's Pick section consists of eight columns. They form a 2x4 grid at medium screen size. However, they become a 4x2 grid for large and extra-large screens.

#### Featured Slideshows




The Top Section is made up of two lists of link. They are positioned using **Flexbox**, one to the left and one to the right.

Three changes happen within this section as the screen size reduces. At **1023px**, the left margin moves inwards to make space for the logo which is positioned as absolute, relative to the body, at the top left corner of the page. The list on the left disappears at **811px**, and the whole Top section is removed at **767px**.

### Navigation

 This section contains a list of the main navigation links, along with a generic container for two icons - search and bars. The whole section is positioned to stick once it hits the top of the page. Similar to the Top section, **Flexbox** is used to position the list of links and icons container within the Navigation.

 As the screen size hits **1213px**, the last item in the main navigation is removed. At **1023px**, a bigger left margin is applied to also make way for the logo. The search icon is removed once the screen gets to **811px**. The final changes in this section occur at screen size **767px**. At this point the main navigation list disappears to make way for the two icons which are then positioned to the extreme right.

### Featured Section

 This section consists of three featured articles. They are positioned using **Grid**, with each article assigned its own `grid-area`. Beside the logo and date having an absolute position relative to the first article, the contents of each article are positioned with **Flexbox**. The `flex` property is used to ensure the contents do not overflow their container.

 The logo and date within the first article are removed at **1023px**. The grid layout changes to three rows and one column as the screen size hits **767px**. Thereafter, some size adjustments are made to the heading within the first article to ensure the rows are of equal height.

### Main

The Main section acts as a wrapper housing four sub-sections which form the bulk of the webpage. It is given a width of **1192px**, and then centered. The sub-sections it wraps are namely: the **News**, **Funding**, **Topics** and **Deals** sections.

#### News Section

This section is made up of a heading, and a container carrying eight articles. **CSS Grid's** `auto-fit` and `minmax` are applied to the container, to initially layout the articles in a 4x2 grid. This allows for the articles to self-adjust and respond to changes in screen-size. However, at **767px**, the articles are adapted to a one-column, eight-row grid. The article images are resized and Floated to the left to achieve the final layout.

#### Funding Section

The Funding section consists of two main containers. One with a heading and a list of links, and the other with four articles.

The contents of the first container are aligned in a row using **Flexbox**. For the second container, `auto-fit` and `minmax` are also employed to create a responsive grid.

As the screen resizes to **1023px** the contents of the first container adopt a column alignment, and the order of the links within the first container is reversed. The last article from the second container is also removed. At **767px**, the list of links adopt a column layout, as the second container becomes a three-row, one-column grid to accomodate the articles within it.

#### Topics Section

This section is further divided into eight topic sections, and laid out with `auto-fit` and `minmax`.

Each of the eight sections are made up of two articles and a list of links. **Flexbox** is used to layout the first article, with the `flex`property used again to ensure its contents do not overflow. The contents of the second article are positioned with **Float**.

The sections are adapted to a one-column, eight-row grid when the screen size reaches **767px** or less.

#### Deals Section

Similar to previous sections, the Deals section also consists of two main containers. The first container has a heading and one link, while the second container holds eight articles.

The heading and link are aligned with **Flexbox**. Thereafter, the articles are laid out in a responsive grid enabled by `auto-fit` and `minmax`.

There is only one layout change in this section. As with the News section, the articles adopt a one-column, eight-row grid, with the article images resized and **Floated** left.

### Footer

The Footer makes up the final part of the webpage. It is split up into two parts. One part with two sets of links, the other containing the webpage small prints. Both parts are assigned a width ceiling of **1192px**, and then centered. The links within the first container are positioned using **Flexbox**, with a `flex-wrap` property applied to ensure they wrap as the screen size shrinks. The small prints text are then aligned to the center of their container.

At **767px**, the margin between list items in the first set of links is reduced, and the third list item is removed in the second set. The small prints are set to `display block` instead of `inline` so that they stack on top of each other as the screen gets smaller. The third list item in the second set appears again at **479px**. Finally, the sixth list item is removed from the first set as the page reaches **320px**.

## Technologies Used

- HTML, CSS. JavaScript.
- Bootstrap.
- Github, Git, Visual Studio Code.
- Pesticide, Font Awesome.

## Live Demo

[Live Demo Link](https://raw.githack.com/cliftondavies/Newsweek/feature/homepage/index.html)

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
