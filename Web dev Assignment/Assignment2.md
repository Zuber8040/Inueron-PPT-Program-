Q.1 Whats Box Model in CSS & Which CSS Properties are part of it ? (2 Marks)
Ans:
The box model in CSS is a fundamental concept that describes how elements are structured and displayed on a web page. It consists of several components that define the size, spacing, and positioning of an element.
The CSS properties that are part of the box model include:

Content: This represents the actual content of the element and is controlled by properties like width and height.

Padding: It defines the space between the content and the element's border. Padding can be set using properties like padding-top, padding-right, padding-bottom, and padding-left.
Border: It is a line that surrounds the content and padding of an element. The border can be styled using properties like border-width, border-style, and border-color.
Margin: It creates space between the element's border and adjacent elements. Margins can be set using properties like margin-top, margin-right, margin-bottom, and margin-left

Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?
(2 Marks)
Ans:
The different types of selectors in CSS include:

Element Selectors: Select elements based on their HTML tag name. For example, p selects all <p> elements on the page.

Class Selectors: Select elements based on the value of their class attribute. For example, .my-class selects all elements with class="my-class".

ID Selectors: Select a specific element based on the value of its id attribute. For example, #my-id selects the element with id="my-id".

Attribute Selectors: Select elements based on the presence or value of specific attributes. For example, [type="text"] selects all elements with type="text".

Pseudo-Classes: Select elements based on their state or position in the document. For example, :hover selects elements when the mouse is hovering over them.

Advantages of different CSS selectors:

Specificity: Different selectors have varying levels of specificity, allowing you to target elements with precision. This helps avoid conflicts and ensures the desired styles are applied.
Reusability: Class and ID selectors can be applied to multiple elements, allowing you to apply consistent styles across the website without duplicating code.
Modularity: Class and ID selectors promote modular code by separating the structure (HTML) from the presentation (CSS). This makes it easier to update and maintain the styles.
State-based styling: Pseudo-classes enable you to apply styles based on user interactions or element states. This helps create interactive and dynamic user experiences.


Q.3 What is VW/VH & How its different from PX? (2 Marks)
Ans:
VW (Viewport Width) and VH (Viewport Height) are relative units of measurement in CSS. They represent a percentage of the viewport's width or height, respectively. They provide a responsive and scalable way to size elements based on the dimensions of the viewport. In contrast, PX (Pixels) is an absolute unit of measurement that defines the size of an element based on fixed pixel values, which can result in less flexibility and responsiveness.

Q.4 Whats difference between Inline, Inline Block and block ? (3 Marks)
Ans:
Inline elements are displayed horizontally, and their width and height are determined by their content. They do not start on a new line.

Inline-block elements are displayed inline, but they can have a width and height specified. They still flow with surrounding content but can have block-like properties.

Block elements start on a new line and take up the full width available. They have a width and height specified and can have margins, padding, and other block-level properties. They create a visual block that forces subsequent content to appear below them.

Q.5 How is Border-box different from Content Box? (2 Marks)
Ans:
Border-box is a CSS box-sizing property value that includes the content, padding, and border within the specified width and height of an element. It means that the total size of the element, including its borders and padding, remains constant.

In contrast, Content-box is the default value of box-sizing, where the width and height only apply to the content area of an element. The padding and border are added on top of the specified width and height, increasing the overall size of the element.

In summary, Border-box considers the total size of an element, including borders and padding, while Content-box only applies the width and height to the content area, with padding and borders adding to the overall size.

Q.6 What’s z-index and How does it Function ? (2 Marks)
Ans:
Z-index is a CSS property that controls the stacking order of elements on a web page in the z-axis. It determines which elements appear in front or behind other elements. The higher the z-index value, the closer the element is to the user, and the more it overlaps other elements. Elements with a higher z-index value will be displayed on top of elements with lower values.

Q7 What’s Grid & Flex and difference between them? (5 Marks)
Ans:
Grid and Flex are two CSS layout systems that provide different approaches to creating flexible and responsive web layouts.

Grid:
- Grid is a two-dimensional layout system that divides a web page into rows and columns.
- It allows precise control over the placement and sizing of elements within the grid.
- Grid provides advanced features like grid lines, grid tracks, and grid areas, enabling complex layout arrangements.
- It is best suited for creating grid-based designs, such as magazine-style layouts or intricate grid structures.

Flex:
- Flex is a one-dimensional layout system that operates along either the horizontal or vertical axis.
- It focuses on distributing space and controlling the alignment of elements within a flex container.
- Flex provides properties like `flex-direction`, `flex-wrap`, and `justify-content` to control the layout behavior.
- It is ideal for building flexible and responsive designs, such as navigation menus, flexible content sections, or simple row-based layouts.

Difference:
- Grid is a two-dimensional layout system, while Flex is a one-dimensional layout system.
- Grid is designed for creating complex grid-based layouts with rows and columns, whereas Flex is more focused on flexible and responsive layouts along a single axis.
- Grid allows precise control over both the horizontal and vertical positioning of elements, while Flex primarily focuses on controlling the layout within a single row or column.
- Grid is suitable for more complex and structured layouts, while Flex is well-suited for simpler, flexible layouts that require dynamic resizing and alignment.

Overall, Grid and Flex offer different approaches to web layout, each with its own strengths and best use cases. Depending on the specific design requirements, either Grid or Flex (or even a combination of both) can be chosen to achieve the desired layout and responsiveness.

Q8 Difference between absolute and relative and sticky and fixed position explain with
example. (5 Marks)
Ans:
Absolute and Relative Positioning:

1. Absolute Positioning:
   - Elements with `position: absolute;` are positioned relative to the nearest positioned ancestor (if any), otherwise relative to the initial containing block.
   - They are completely removed from the normal document flow and do not affect the positioning of other elements.
   - Example: 
   ```html
   <div style="position: relative;">
     <div style="position: absolute; top: 20px; left: 20px;">Absolute element</div>
   </div>
   ```

2. Relative Positioning:
   - Elements with `position: relative;` are positioned relative to their normal position in the document flow.
   - They can be shifted using offset properties like `top`, `bottom`, `left`, and `right`.
   - Other elements are not affected by their positioning.
   - Example:
   ```html
   <div style="position: relative;">
     <div style="position: relative; top: 20px; left: 20px;">Relative element</div>
   </div>
   ```

Sticky and Fixed Positioning:

1. Sticky Positioning:
   - Elements with `position: sticky;` are positioned based on their normal position until a specified scroll threshold is reached.
   - Once the threshold is reached, the element becomes "stuck" and remains fixed relative to its nearest scrolling ancestor.
   - Example:
   ```html
   <div style="position: sticky; top: 20px;">Sticky element</div>
   ```

2. Fixed Positioning:
   - Elements with `position: fixed;` are positioned relative to the viewport and remain fixed even when scrolling.
   - They do not move when the page is scrolled.
   - Example:
   ```html
   <div style="position: fixed; top: 20px; right: 20px;">Fixed element</div>
   ```

These positioning techniques offer different ways to control the placement and behavior of elements on a web page. Absolute and relative positioning affect the normal flow of elements, while sticky and fixed positioning allow elements to remain fixed or sticky relative to the viewport or scrolling ancestor.

Q.9 Build Periodic Table as shown in the below image (10 Marks)

Ans: 
 https://github.com/Zuber8040/Assessment-Ineuron-full-stack-web-deveploment/blob/main/CSS%20Assignment/periodic%20table.html


