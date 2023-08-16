# React Preview Link


A flexible React component that helps you display preview links with customizable styles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Changelog](#changelog)
- [Todo](#todo)
- [License](#license)

## Installation

You can install `react-preview-link` using npm:

```bash
npm install react-preview-link
```

or using yarn:

```bash
yarn add react-preview-link
```

## Usage

To use the `PreviewLink` component, import it into your React component and pass the props.

### Basic Example With Default Props
```jsx
import React from 'react';
import PreviewLink from 'react-preview-link';

const MyComponent = () => {
  return (
    <PreviewLink
      url="https://github.com"
    />
  );
};
```
### Fully Customized Example
```jsx
import React from 'react';
import PreviewLink from 'react-preview-link';

const MyComponent = () => {
  return (
    <PreviewLink
      url="https://github.com"
      width={300}
      height={200}
      margin={10}
      border="1px solid #ccc"
      direction="horizontal"
      reverse={false}
      imageCoverage={70}
      content={{
        vertical: 'center',
        horizontal: 'start',
        margin: 5,
        gap: 5,
      }}
      image={{
        borderRadius: 8,
        margin: 5,
      }}
    />
  );
};

export default MyComponent;
```

## Props

The `PreviewLink` component accepts the following props:

```js
type PreviewLinkProps = {
  url: string,
  width: number,
  height: number,
  margin: number,
  border: string,
  direction: Direction,
  reverse: boolean,
  imageCoverage: number,
  content: {
    vertical?: AlignmentDirection,
    horizontal?: AlignmentDirection,
    margin?: number | string,
    gap?: number,
  },
  image: {
    borderRadius?: number | string,
    margin?: number | string,
  },
};
```

### Props Table

| Prop            | Type                                          | Description                                                  |
|-----------------|-----------------------------------------------|--------------------------------------------------------------|
| `url`           | `string`                                      | The URL of the preview link.                                 |
| `width`         | `number`                                      | The width of the preview container.                          |
| `height`        | `number`                                      | The height of the preview container.                         |
| `margin`        | `number`                                      | The margin around the preview container.                     |
| `border`        | `string`                                      | The border style of the preview container.                   |
| `direction`     | `'horizontal'` or `'vertical'`                | The direction of content alignment.                          |
| `reverse`       | `boolean`                                     | Whether to reverse the content and image positions.          |
| `imageCoverage` | `number` (0 to 100)                             | The coverage percentage of the image on the preview.         |
| `content`       | `{ vertical?, horizontal?, margin?, gap? }` | Object containing content alignment and spacing settings.   |
| `image`         | `{ borderRadius?, margin? }`                | Object containing image styling settings.                    |

It is not on the table but adding the<code>key</code> prop is highly recommended. It is important especially if you have multiple PreviewLink. More information about key prop: https://react.dev/learn/rendering-lists#rules-of-keys

## Changelog
### Version 1.0.1 (17.08.2023)
- Initial production release
- Added 4 layout option to preview link
- Seperated style option for image and content


## Todo
Here are some ideas and planned features for future releases of `react-preview-link`:

- [ ] **Demo**: Add demo images and create a showcase
- [ ] **Examples**: Create examples folder to provide different layout examples.
- [ ]  **Enhanced Styling**: Provide more built-in styles for the preview link. Primary and secondary color
- [ ] **Content Manipulation**: Handle link title and link description with callback. (For example: get substring of description)
- [ ] **Caching**: Cache the requested links for a while to decrease latency.
- [ ] **Image Lazy Loading Animation**: Add a simple lazy loading system for image. (Maybe with: https://loading.io/css/)

## License
This project is licensed under the [MIT License](LICENSE).

## Thanks
- ChatGPT: (for helping me create this file)
