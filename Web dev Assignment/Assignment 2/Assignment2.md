Q.1 What is a Media Query in CSS, and what is its purpose?

Ans:
A media query in CSS is a conditional statement that allows you to apply different CSS styles to a document depending on the capabilities of the device it is being displayed on. For example, you could use a media query to change the font size of a website on a mobile device so that it is easier to read.



Here are some of the benefits of using media queries in CSS:

- Responsive web design: Media queries allow you to create websites that adapt to different screen sizes. This means that your website will look good and be easy to use on any device, from a desktop computer to a mobile phone.

- Improved user experience: Media queries can help to improve the user experience by ensuring that your website is accessible to everyone, regardless of the device they are using.

- Reduced development time: Media queries can help to reduce development time by allowing you to create a single CSS file that can be used on multiple devices.

Q.2 How do you define a media query in CSS?

Ans:

```
@media media_type and (media_feature_expression) {
  /* CSS styles */
  (min-width: 600px)
}

```

Q.3 Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries.

Ans:

Breakpoints are the points at which a website's content and design will adapt in a certain way to provide the best possible user experience. They are used in media queries, which are conditional CSS statements that allow you to specify different CSS rules for different screen sizes.

@media (max-width: 768px) {
  .container {
    width: 95%;
  }
}


Q.4 What is the purpose of using Media Queries for Print Media?

Ans:

Media queries can be used to create different styles for print media. This can be useful for a number of reasons, such as:

To improve the readability of the content. When printed, text can appear smaller and more condensed than it does on a screen. Using media queries, you can increase the font size and line spacing to make the content easier to read.
To remove unnecessary elements. Some elements on a web page may not be necessary when printed. For example, you might want to hide the navigation bar or the footer.
To add print-specific styles. There are some styles that are only relevant for print media. For example, you might want to add headers and footers to the pages, or you might want to change the margins

Q.5 What is the purpose of the orientation media feature?

Ans:

The orientation media feature is used to test the orientation of the viewport (or the page box, for paged media). It can be used to apply different styles to a website depending on whether the viewport is in portrait or landscape orientation.

For example, you might want to change the layout of your website so that it is more suitable for a particular orientation. You could do this by changing the width and height of your columns, or by hiding certain elements that are not important in a particular orientation.

@media (orientation: landscape) {
  .container {
    width: 100%;
    height: auto;
  }
}


